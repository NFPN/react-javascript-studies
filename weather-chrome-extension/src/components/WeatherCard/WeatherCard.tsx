import React, { useEffect, useState } from "react";
import "./WeatherCard.css";
import {
    OpenWeatherData,
    OpenWeatherTempScale,
    fetchOpenWeatherData,
} from "../../utils/api";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from "@material-ui/core";

const WeatherCardContainer: React.FC<{
    children: React.ReactNode;
    onDelete?: () => void;
}> = ({ children, onDelete }) => {
    return (
        <Box mx={"4px"} my={"16px"}>
            <Card>
                <CardContent>{children}</CardContent>
                <CardActions>
                    {onDelete && (
                        <Button color="secondary" onClick={onDelete}>
                            <Typography className="weatherCard-body">
                                Delete
                            </Typography>
                        </Button>
                    )}
                </CardActions>
            </Card>
        </Box>
    );
};

type WeatherCardState = "loading" | "error" | "ready";

const WeatherCard: React.FC<{
    city: string;
    tempScale: OpenWeatherTempScale;
    onDelete?: () => void;
}> = ({ city, tempScale, onDelete }) => {
    const [weatherData, setWeatherData] = useState<OpenWeatherData>(null);
    const [cardState, setCardState] = useState<WeatherCardState>("loading");

    useEffect(() => {
        fetchOpenWeatherData(city, tempScale)
            .then((data) => {
                setWeatherData(data);
                setCardState("ready");
            })
            .catch((err) => setCardState("error"));
    }, [city, tempScale]);

    if (cardState === "loading" || cardState === "error") {
        return (
            <WeatherCardContainer onDelete={onDelete}>
                <Typography className="weatherCard-title">{city}</Typography>
                <Typography className="weatherCard-body">
                    {cardState == "loading"
                        ? "Loading..."
                        : "Error: could not retrieve weather data for the city "}
                </Typography>
            </WeatherCardContainer>
        );
    }

    const degree = tempScale === "metric" ? "\u2103" : "\u2109";

    return (
        <WeatherCardContainer onDelete={onDelete}>
            <Typography className="weatherCard-title">
                {weatherData.name}
            </Typography>
            <Typography className="weatherCard-body">
                {Math.round(weatherData.main.temp)}
                {degree}
            </Typography>
            <Typography className="weatherCard-body">
                Feels Like: {Math.round(weatherData.main.feels_like)}
                {degree}
            </Typography>
        </WeatherCardContainer>
    );
};

export default WeatherCard;
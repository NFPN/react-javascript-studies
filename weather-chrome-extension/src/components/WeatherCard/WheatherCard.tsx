import React, { useEffect, useState } from "react";
import {
    OpenWeatherData,
    OpenWeatherTempScale,
    fetchOpenWeatherData,
} from "../../Utils/api";
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
                            Delete
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
                <Typography variant="body1">
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
            <Typography variant="h5">{weatherData.name}</Typography>
            <Typography variant="body1">
                {Math.round(weatherData.main.temp)}
                {degree}
            </Typography>
            <Typography variant="body1">
                Feels Like: {Math.round(weatherData.main.feels_like)}
                {degree}
            </Typography>
        </WeatherCardContainer>
    );
};

export default WeatherCard;

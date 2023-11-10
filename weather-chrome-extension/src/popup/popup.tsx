import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Add as AddIcon } from "@material-ui/icons";
import "./popup.css";
import WeatherCard from "./WeatherCard";
import "fontsource-roboto";
import { Box, Grid, IconButton, InputBase, Paper } from "@material-ui/core";

const App: React.FC<{}> = () => {
    const [cities, setCities] = useState<string[]>([
        "Sao Jose do Rio Preto",
        "Sao Paulo",
        "ERROR",
    ]);
    const [cityInput, setCityInput] = useState<string>("");

    const handleCityButtonClick = () => {
        if (cityInput === "") {
            return;
        }
        setCities([...cities, cityInput]);
        setCityInput("");
    };

    const handleCityDeleteButoonClick = (index: number) => {
        cities.splice(index, 1);
        setCities([...cities]);
    };

    return (
        <Box mx="8px" my="16px">
            <Grid container>
                <Grid item>
                    <Paper>
                        <Box px="15px" py="5px">
                            <InputBase
                                placeholder="Add a city name"
                                value={cityInput}
                                onChange={(event) =>
                                    setCityInput(event.target.value)
                                }
                            />
                            <IconButton onClick={handleCityButtonClick}>
                                <AddIcon />
                            </IconButton>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
            {cities.map((city, index) => (
                <WeatherCard
                    city={city}
                    key={index}
                    onDelete={() => handleCityDeleteButoonClick(index)}
                />
            ))}
            <Box height="16px"></Box>
        </Box>
    );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);

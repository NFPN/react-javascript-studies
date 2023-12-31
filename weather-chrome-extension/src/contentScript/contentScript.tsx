import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import WeatherCard from "../components/WeatherCard";
import "./contentScript.css";
import { Box, Card } from "@material-ui/core";
import { LocalStorageOptions, getStoredOptions } from "../utils/storage";
import { Messages } from "../utils/message";

const App: React.FC<{}> = () => {
    const [options, setOptions] = useState<LocalStorageOptions | null>(null);
    const [isActive, setIsActive] = useState<boolean>(true);

    useEffect(() => {
        getStoredOptions().then((options) => {
            setOptions(options);
            setIsActive(options.hasAutoOverlay);
        });
    }, []);

    useEffect(() => {
        chrome.runtime.onMessage.addListener((msg) => {
            if (msg === Messages.TOGGLE_OVERLAY) {
                setIsActive(!isActive);
            }
        });
    }, [isActive]);

    if (!options) {
        return null;
    }

    return (
        <>
            {isActive && (
                <Card className="overlayCard">
                    <Box mx="5px" my="20px">
                        <WeatherCard
                            city={options.homeCity}
                            tempScale={options.tempScale}
                            onDelete={() => setIsActive(false)}
                        />
                    </Box>
                </Card>
            )}
        </>
    );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);

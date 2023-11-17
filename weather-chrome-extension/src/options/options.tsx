import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "fontsource-roboto";
import "./options.css";
import {
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    Switch,
    TextField,
    Typography,
} from "@material-ui/core";
import {
    LocalStorageOptions,
    getStoredOptions,
    setStoredOptions,
} from "../utils/storage";

type FormState = "ready" | "saving";

const App: React.FC<{}> = () => {
    const [options, setOptions] = useState<LocalStorageOptions | null>(null);
    const [formState, setFormState] = useState<FormState>("ready");

    useEffect(() => {
        getStoredOptions().then((options) => setOptions(options));
    }, []);

    const handleHomeCityChange = (homeCity: string) => {
        setOptions({
            ...options,
            homeCity,
        });
    };

    const handleAutoOverlayChange = (hasAutoOverlay: boolean) => {
        setOptions({
            ...options,
            hasAutoOverlay,
        });
    };

    const handleSaveButtonClick = () => {
        setFormState("saving");
        setStoredOptions(options).then(() => {
            setTimeout(() => {
                setFormState("ready");
            }, 1000);
        });
    };

    if (!options) {
        return null;
    }

    const isFieldDisabled = formState === "saving";

    return (
        <Box mx="10%" my="2%">
            <Card>
                <CardContent>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h4">
                                Weather Extension Options
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">
                                Home City name
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Enter a home city name"
                                value={options.homeCity}
                                onChange={(event) =>
                                    handleHomeCityChange(event.target.value)
                                }
                                disabled={isFieldDisabled}
                            ></TextField>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">
                                Auto-Ovelay on page load
                            </Typography>
                            <Switch
                                color="primary"
                                checked={options.hasAutoOverlay}
                                onChange={(event, checked) =>
                                    handleAutoOverlayChange(checked)
                                }
                                disabled={isFieldDisabled}
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleSaveButtonClick}
                                disabled={isFieldDisabled}
                            >
                                {formState === "ready" ? "Save" : "Saving..."}
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);

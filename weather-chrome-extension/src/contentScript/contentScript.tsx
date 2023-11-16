import React from "react";
import ReactDOM from "react-dom";
import WeatherCard from "../components/WeatherCard";
import "./contentScript.css";
import { Card } from "@material-ui/core";

const App: React.FC<{}> = () => {
    return (
        <Card className="overlayCard">
            <WeatherCard city="Sao Jose do Rio Preto" tempScale="metric" />;
        </Card>
    );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);

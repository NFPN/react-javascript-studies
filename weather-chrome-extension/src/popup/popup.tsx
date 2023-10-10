import React from "react";
import ReactDOM from "react-dom";
import "./popup.css";
import WeatherCard from "./WeatherCard";
import "fontsource-roboto";

const App: React.FC<{}> = () => {
    return (
        <div>
            <WeatherCard city="Sao Jose do Rio Preto" />
            <WeatherCard city="Sao Paulo" />
            <WeatherCard city="error" />
        </div>
    );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);

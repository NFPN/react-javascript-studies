import { setStoredCities, setStoredOptions } from "../Utils/storage";

chrome.runtime.onInstalled.addListener(() => {
    setStoredCities([]);
    setStoredOptions({
        tempScale: "metric",
    });
});

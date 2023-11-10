import { setStoredCities } from "../Utils/Storage";

chrome.runtime.onInstalled.addListener(() => {
    setStoredCities([]);
});

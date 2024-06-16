import React, { useState, useEffect } from "react";
import "./ThemeSwitch.css";

const ThemeSwitch: React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        const savedMode = window.localStorage.getItem("darkMode");
        return savedMode === "true";
    });

    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        window.localStorage.setItem("darkMode", darkMode.toString());
    }, [darkMode]);

    return (
        <label className="switch">
            <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                className="hidden"
            />
            <span className="slider round"></span>
        </label>
    );
};

export default ThemeSwitch;

import "./App.css";
import { Route, Routes } from "react-router";
import Main from "./pages/Main/Main";
import { useState, useEffect } from "react";
import changeColors from "./ChangeColors";

function App() {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        changeColors(theme);
    }, [theme]);

    useEffect(() => {
        const colorSchemeQuery = window.matchMedia(
            "(prefers-color-scheme: dark)"
        );
        const handleColorSchemeChange = (event) => {
            setTheme(event.matches ? "dark" : "light");
        };

        colorSchemeQuery.addEventListener("change", handleColorSchemeChange);
        if (colorSchemeQuery.matches) {
            setTheme("dark");
        }

        return () => {
            colorSchemeQuery.removeEventListener(
                "change",
                handleColorSchemeChange
            );
        };
    }, []);
    useEffect(() => {
        const setViewportHeight = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        };

        setViewportHeight();
        window.addEventListener("resize", setViewportHeight);

        return () => {
            window.removeEventListener("resize", setViewportHeight);
        };
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>
    );
}

export default App;

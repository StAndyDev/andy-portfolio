import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // appliquer theme mode
        const savedTheme = localStorage.getItem('s_andy_portfolio_theme');
        if (savedTheme === 'dark') {
            applyTheme('dark');
        } else {
            applyTheme('light');
        }
        // appliquer la couleur primaire
        const colorPrimary = localStorage.getItem('s_andy_portfolio_color_primary');
        document.querySelector(":root").style.setProperty('--color-primary', colorPrimary);
    }, []);

    // THEME
    const applyTheme = (mode) => {
        // get colors
        const headerColorLight = getComputedStyle(document.documentElement).getPropertyValue('--header-color-light').trim();
        const headerColorDark = getComputedStyle(document.documentElement).getPropertyValue('--header-color-dark').trim();
        const colorLight = getComputedStyle(document.documentElement).getPropertyValue('--color-light').trim();
        const colorDark = getComputedStyle(document.documentElement).getPropertyValue('--color-dark').trim();
        const colorWhite = getComputedStyle(document.documentElement).getPropertyValue('--color-white').trim();
        const colorBlack = getComputedStyle(document.documentElement).getPropertyValue('--color-black').trim();
        const colorBlue = getComputedStyle(document.documentElement).getPropertyValue('--color-blue').trim();
        const colorBlueInDark = getComputedStyle(document.documentElement).getPropertyValue('--color-blue-in-dark').trim();
        const colorBlueShadowInLight = getComputedStyle(document.documentElement).getPropertyValue('--color-blue-shadow-in-light').trim();
        const colorBlueShadowInDark = getComputedStyle(document.documentElement).getPropertyValue('--color-blue-shadow-in-dark').trim();
        const sectionColorLightPrimary = getComputedStyle(document.documentElement).getPropertyValue('--section-color-light-primary').trim();
        const sectionColorDarkPrimary = getComputedStyle(document.documentElement).getPropertyValue('--section-color-dark-primary').trim();
        // DARK MODE
        if (mode === 'dark') {

            // apply
            document.documentElement.style.setProperty('--current-header-color-light', headerColorDark);
            document.documentElement.style.setProperty('--current-header-color-dark', headerColorLight);
            document.documentElement.style.setProperty('--current-color-light', colorDark);
            document.documentElement.style.setProperty('--current-color-dark', colorLight);
            document.documentElement.style.setProperty('--current-color-white', colorBlack);
            document.documentElement.style.setProperty('--current-color-black', colorWhite);
            document.documentElement.style.setProperty('--current-color-blue', colorBlueInDark);
            document.documentElement.style.setProperty('--current-color-blue-in-dark', colorBlue);
            document.documentElement.style.setProperty('--current-color-blue-shadow-in-light', colorBlueShadowInDark);
            document.documentElement.style.setProperty('--current-color-blue-shadow-in-dark', colorBlueShadowInLight);
            document.documentElement.style.setProperty('--current-section-color-light-primary', sectionColorDarkPrimary);
            document.documentElement.style.setProperty('--current-section-color-dark-primary', sectionColorLightPrimary);
            setIsDarkMode(true);
            localStorage.setItem('s_andy_portfolio_theme', 'dark');

        // LIGHT MODE
        } else {

            // apply
            document.documentElement.style.setProperty('--current-header-color-light', headerColorLight);
            document.documentElement.style.setProperty('--current-header-color-dark', headerColorDark);
            document.documentElement.style.setProperty('--current-color-light', colorLight);
            document.documentElement.style.setProperty('--current-color-dark', colorDark);
            document.documentElement.style.setProperty('--current-color-white', colorWhite);
            document.documentElement.style.setProperty('--current-color-black', colorBlack);
            document.documentElement.style.setProperty('--current-color-blue', colorBlue);
            document.documentElement.style.setProperty('--current-color-blue-in-dark', colorBlueInDark);
            document.documentElement.style.setProperty('--current-color-blue-shadow-in-light', colorBlueShadowInLight);
            document.documentElement.style.setProperty('--current-color-blue-shadow-in-dark', colorBlueShadowInDark);
            document.documentElement.style.setProperty('--current-section-color-light-primary', sectionColorLightPrimary);
            document.documentElement.style.setProperty('--current-section-color-dark-primary', sectionColorDarkPrimary);
            setIsDarkMode(false);
            localStorage.setItem('s_andy_portfolio_theme', 'light');
        }
    };

    return (
        // utilisation du context en index.js et appelation de isDark et apply dans ThemeCustomize
        <ThemeContext.Provider value={{ isDarkMode, applyTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

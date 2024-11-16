import '../styles/style.css';
import React, { useEffect } from 'react';
import HeaderPage from '../components/main-component/HeaderPage';
import ThemeCustomise from '../components/main-component/ThemeCustomise';
import SectionHome from '../components/main-component/SectionHome';
import SectionAbout from '../components/main-component/SectionAbout';
import SectionServices from '../components/main-component/SectionServices';
import SectionPortfolio from '../components/main-component/SectionPortfolio';
import SectionContact from '../components/main-component/SectionContact';

export default function MainPage() {
    useEffect(() => {
        // -------- Theme customize ---------
        const btnTheme = document.querySelector('#theme-button');
        const themeModal = document.querySelector(".customize-theme");
        const btnHideModalCustomize = document.querySelector(".btn-hide-card");
        const colorPalette = document.querySelectorAll(".color-list .color-item"); //liste des couleurs
        var root = document.querySelector(":root");
        var darkMode = false;
        const checkChangeTheme = document.getElementById('check-change-mode');

        // open modal
        function openThemeModal(){
            themeModal.style.visibility = 'visible';
            themeModal.style.opacity = 1;
        }

        // close modal
        const closeThemeModal = (e) => {
            themeModal.style.visibility = 'hidden';
            themeModal.style.opacity = 0;
        }

        btnTheme.addEventListener('click', openThemeModal);
        btnHideModalCustomize.addEventListener('click', closeThemeModal);

        // change color primary
        colorPalette.forEach(color => {
            color.addEventListener('click', (e) => {
                let colorElement = window.getComputedStyle(e.target).getPropertyValue('background-color');
                root.style.setProperty('--color-primary', colorElement);
            });
        });
        // theme
        let rootStyles = getComputedStyle(document.documentElement);
        let headerColorLight = rootStyles.getPropertyValue('--header-color-light');
        let headerColorDark = rootStyles.getPropertyValue('--header-color-dark');
        let mainColorLight = rootStyles.getPropertyValue('--color-dark');
        let mainColorDark = rootStyles.getPropertyValue('--color-light');
        let colorBlue = rootStyles.getPropertyValue('--color-blue');
        let colorBlueInDark = rootStyles.getPropertyValue('--color-blue-in-dark');
        let colorBlueShadowInLight = rootStyles.getPropertyValue('--color-blue-shadow-in-light');
        let colorBlueShadowInDark = rootStyles.getPropertyValue('--color-blue-shadow-in-dark');
        let colorWhite = rootStyles.getPropertyValue('--color-white');
        let colorBlack = rootStyles.getPropertyValue('--color-black');

        // theme detection
        // if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        //     toggleToDark();

        // } else {
        //     toggleToLight();
        // }

        //change theme
        checkChangeTheme.addEventListener('change', () => {
            checkChangeTheme.checked ? darkMode = true : darkMode = false;
            if (darkMode) {
                toggleToDark();
            } else {
                toggleToLight();
            }
        });
        function toggleToDark() {
            root.style.setProperty('--header-color-light', headerColorDark);
            root.style.setProperty('--color-light', mainColorLight);
            root.style.setProperty('--color-dark', mainColorDark);
            root.style.setProperty('--color-blue', colorBlueInDark);
            root.style.setProperty('--color-blue-shadow-in-light', colorBlueShadowInDark);
            root.style.setProperty('--color-white', colorBlack);
            checkChangeTheme.checked = true;
            darkMode = true;
        }
        function toggleToLight() {
            root.style.setProperty('--header-color-light', headerColorLight);
            root.style.setProperty('--color-light', mainColorDark);
            root.style.setProperty('--color-dark', mainColorLight);
            root.style.setProperty('--color-blue', colorBlue);
            root.style.setProperty('--color-blue-shadow-in-light', colorBlueShadowInLight);
            root.style.setProperty('--color-white', colorWhite);
            checkChangeTheme.checked = false;
            darkMode = false;
        }
        // hide/show menu
        let navMenu = document.getElementById('nav-menu');
        let navClose = document.getElementById('nav-close');
        let navToggle = document.getElementById('nav-toggle');

        //hide
        navClose.addEventListener('click', () => {
            navMenu.classList.add('hide-menu');
        });
        //show
        navToggle.addEventListener('click', () => {
            if (navMenu.classList.contains('hide-menu')) {
                navMenu.classList.remove('hide-menu');
            }
        });

        // chargement
        window.addEventListener('load', function() {
            setTimeout(function() {
              document.getElementById('loader').style.display = 'none';
            }, 200);
        });
          

          
          
    }, []); // Le tableau vide [] signifie que ce code sera exécuté une seule fois, après le premier rendu    

    return (
        <div>
            <div id="loader"></div>
            <HeaderPage />
            <main className="main-content">
                <SectionHome />
                <SectionAbout/>
                <SectionServices/>
                <SectionPortfolio/>
                <SectionContact/>
            </main>
            <ThemeCustomise />
        </div>
    );
}
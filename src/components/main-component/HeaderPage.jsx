import { useEffect } from 'react';

export default function HeaderPage() {

    useEffect(() => {

        // -------- Theme customize ---------
        var root = document.querySelector(":root");
        const btnTheme = document.querySelector('#theme-button');
        const themeModal = document.querySelector(".customize-theme");
        const btnHideModalCustomize = document.querySelector(".btn-hide-card");
        const colorPalette = document.querySelectorAll(".color-list .color-item"); //liste des couleurs
        const checkChangeTheme = document.getElementById('check-change-mode');
        var isDark = false;

        // open modal
        function openThemeModal() {
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
        // color theme
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
        let sectionColorLightPrimary = rootStyles.getPropertyValue('--section-color-light-primary');
        let sectionColorDarkPrimary = rootStyles.getPropertyValue('--section-color-dark-primary');

        checkChangeTheme.addEventListener('change', changeTheme);

        //change theme
        function changeTheme() {
            isDark ? toggleToLight() : toggleToDark();
        }
        // theme detection
        // function themeDetection() {
        //     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        //         toggleToDark();

        //     } else {
        //         toggleToLight();
        //     }
        // }

        function toggleToDark() {
            root.style.setProperty('--header-color-light', headerColorDark);
            root.style.setProperty('--color-light', mainColorLight);
            root.style.setProperty('--color-dark', mainColorDark);
            root.style.setProperty('--color-blue', colorBlueInDark);
            root.style.setProperty('--color-blue-shadow-in-light', colorBlueShadowInDark);
            root.style.setProperty('--color-white', colorBlack);
            root.style.setProperty('--section-color-light-primary', sectionColorDarkPrimary);
            checkChangeTheme.checked = true;
            isDark = true;
        }
        function toggleToLight() {
            root.style.setProperty('--header-color-light', headerColorLight);
            root.style.setProperty('--color-light', mainColorDark);
            root.style.setProperty('--color-dark', mainColorLight);
            root.style.setProperty('--color-blue', colorBlue);
            root.style.setProperty('--color-blue-shadow-in-light', colorBlueShadowInLight);
            root.style.setProperty('--color-white', colorWhite);
            root.style.setProperty('--section-color-light-primary', sectionColorLightPrimary);
            checkChangeTheme.checked = false;
            isDark = false;
        }

        // header scroll opacity
        window.addEventListener('scroll', function () {
            const header = document.querySelector('.header');
            if (window.scrollY > 75) { // Le seuil de défilement où l'opacité change
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // changer l'icone menu
        let menuIcon = document.querySelector('#menu-icon');
        let navBar = document.querySelector('.nav-menu');

        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x');
            navBar.classList.toggle('active');
        }

        // permet de naviguer vers un ancre dans une autre page
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <header className="header" id="header">
            {/* <!-- nav --> */}
            <nav className="nav container padd-15">
                <a href="#home" className="nav-logo">
                    <h2><span className="header-title">&lt;&#47;</span>sitraka_andY<span className="header-title">&gt;</span></h2>
                </a>
                {/* <!-- menu --> */}
                <div className="nav-menu" id="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-item"><a href="/#home" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="/#about" className="nav-link">About</a></li>
                        <li className="nav-item"><a href="/#services" className="nav-link">Services</a></li>
                        <li className="nav-item"><a href="/#portfolio" className="nav-link">Portfolio</a></li>
                        <li className="nav-item"><a href="/#contact" className="nav-link">Contact</a></li>
                        <li className="nav-separator"></li>
                    </ul>
                </div>
                {/* <!-- btn nav --> */}
                <div className="nav-btns">
                    {/* <!-- change theme btn --> */}
                    <i className="bx bx-palette change-theme" id="theme-button"></i>
                    {/* <!-- toggle btn --> */}
                    <div className="nav-toggle" id="nav-toggle">
                        <i id="menu-icon" className='bx bx-menu'></i>
                    </div>
                </div>
            </nav>
        </header>
    );
}
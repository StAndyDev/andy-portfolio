import { useEffect } from 'react';
export const root = null;
export default function HeaderPage() {
    useEffect(() => {

        const btnTheme = document.querySelector('#theme-button');
        const themeModal = document.querySelector(".customize-theme");
        const btnHideModalCustomize = document.querySelector(".btn-hide-card");
        
        // open modal
        function openThemeModal() {
            themeModal.style.visibility = 'visible';
            themeModal.style.opacity = 1;
        }
        btnTheme.addEventListener('click', openThemeModal);
        // close modal
        const closeThemeModal = (e) => {
            themeModal.style.visibility = 'hidden';
            themeModal.style.opacity = 0;
        }
        btnHideModalCustomize.addEventListener('click', closeThemeModal);


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
                <a href="/" className="nav-logo">
                    <h2><span className="header-title">&lt;&#47;</span>sitraka_andY<span className="header-title">&gt;</span></h2>
                </a>
                {/* <!-- menu --> */}
                <div className="nav-menu" id="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-item"><a href="/#home" className="nav-link">Accueil</a></li>
                        <li className="nav-item"><a href="/#about" className="nav-link">A propos</a></li>
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
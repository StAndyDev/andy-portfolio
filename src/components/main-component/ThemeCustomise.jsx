import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
export default function ThemeCustomise() {
    // contexte du theme
    const { isDarkMode, applyTheme } = useContext(ThemeContext);
    // gestion du couleur primary
    const changeColorPrimary = (e) => {
        const colorElement = window.getComputedStyle(e.target).backgroundColor;
        document.querySelector(":root").style.setProperty('--color-primary', colorElement);
        localStorage.setItem('s_andy_portfolio_color_primary', colorElement);
    }

    return (
        <div className="customize-theme">
            <div className="card fade">
                <span><i className="btn-hide-card bx bx-x"></i></span>
                <h3 style={{ textAlign: 'center' }}>Personnalisez votre vue</h3>
                <p style={{ textAlign: 'center' }}>Gérez votre thème et vos couleurs</p>
                <ul className="customize-list">
                    {/* <!-- theme --> */}
                    <li className="theme">
                        <span>Mode Sombre</span>
                        <input type="checkbox" checked={isDarkMode} onChange={() => isDarkMode? applyTheme('light') : applyTheme('dark')} id="check-change-mode" style={{ display: 'none' }}/>
                        {console.log("Is Dark Mode : "+isDarkMode)}
                        <label htmlFor="check-change-mode" className="toggle-btn"></label>
                    </li>
                    {/* <!-- color --> */}
                    <li className="color">
                        <span>Choisissez la couleur principale</span>
                        <div className="color-list">
                            <span onClick={changeColorPrimary} className="color-item"></span>
                            <span onClick={changeColorPrimary} className="color-item"></span>
                            <span onClick={changeColorPrimary} className="color-item"></span>
                            <span onClick={changeColorPrimary} className="color-item"></span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
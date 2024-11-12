export default function ThemeCustomise() {

    return (
        <div className="customize-theme to-hide">
            <div className="card fade">
                <span className="btn-hide-card to-hide">X</span>
                <h3>Customize your view</h3>
                <p>Manage your theme and color</p>
                <ul className="customize-list">
                    {/* <!-- theme --> */}
                    <li className="theme">
                        <span>Dark Mode</span>
                        <input type="checkbox" id="check-change-mode" style={{ display: 'none' }} />
                        <label htmlFor="check-change-mode" className="toggle-btn"></label>
                    </li>
                    {/* <!-- color --> */}
                    <li className="color">
                        <span>Choose primary color</span>
                        <div className="color-list">
                            <span className="color-item"></span>
                            <span className="color-item"></span>
                            <span className="color-item"></span>
                            <span className="color-item"></span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
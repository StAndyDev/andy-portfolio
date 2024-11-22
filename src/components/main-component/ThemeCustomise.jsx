export default function ThemeCustomise() {
    return (
        <div className="customize-theme">
            <div className="card fade">
                <span><i className="btn-hide-card bx bx-x"></i></span>
                <h3 style={{ textAlign: 'center' }}>Customize your view</h3>
                <p style={{ textAlign: 'center' }}>Manage your theme and color</p>
                <ul className="customize-list">
                    {/* <!-- theme --> */}
                    <li className="theme">
                        <span>Dark Mode</span>
                        <input type="checkbox" id="check-change-mode" style={{ display: 'none' }}/>
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
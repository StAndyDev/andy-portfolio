export default function HeaderPage() {
    return (
        <header className="header" id="header">
            {/* <!-- nav --> */}
            <nav className="nav container padd-15">
                <a href="#" className="nav-logo">
                    <h2><span className="header-title">&lt;&#47;</span>sitraka_andY<span className="header-title">&gt;</span></h2>
                </a>
                {/* <!-- menu --> */}
                <div className="nav-menu hide-menu" id="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
                        <li className="nav-item"><a href="#home" className="nav-link">Services</a></li>
                        <li className="nav-item"><a href="#portfolio" className="nav-link">Portfolio</a></li>
                        <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
                        <li className="nav-separator"></li>
                    </ul>
                    {/* <!-- nav close --> */}
                    <div className="nav-close" id="nav-close">
                        <i className="bx bx-x"></i>
                    </div>
                </div>
                {/* <!-- btn nav --> */}
                <div className="nav-btns">
                    {/* <!-- change theme btn --> */}
                    <i className="bx bx-palette change-theme" id="theme-button" style={{border: '4px solid green'}}></i>
                    {/* <!-- toggle btn --> */}
                    <div className="nav-toggle" id="nav-toggle">
                        <i className='bx bx-menu'></i>
                    </div>
                </div>
            </nav>
        </header>
    );
}
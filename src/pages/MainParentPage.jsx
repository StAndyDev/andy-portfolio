import HeaderPage from '../components/main-component/HeaderPage';
import ThemeCustomise from '../components/main-component/ThemeCustomise';
import FooterPage from '../components/main-component/FooterPage';
import { Outlet } from 'react-router-dom';

export default function MainParentPage() {
    return (
        <div>
            <HeaderPage />
            <main className="main-content">
                <Outlet />  {/* MainContentPage, PortfolioDetailsPage */}
            </main>
            <FooterPage />
            <ThemeCustomise />
        </div>
    );
}
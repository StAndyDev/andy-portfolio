import { Outlet } from 'react-router-dom';

export default function MainPage() {
    return (
        <div>
            <Outlet /> {/* MainParentPage, NotFound  */}
        </div>
    );
}
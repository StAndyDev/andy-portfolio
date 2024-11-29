
import SectionHome from '../components/main-component/SectionHome';
import SectionAbout from '../components/main-component/SectionAbout';
import SectionServices from '../components/main-component/SectionServices';
import SectionPortfolio from '../components/main-component/SectionPortfolio';
import SectionContact from '../components/main-component/SectionContact';

export default function MainContentPage() {
    return (
        <div>
            <SectionHome />
            <SectionAbout />
            <SectionServices />
            <SectionPortfolio />
            <SectionContact />
        </div>
    );
}
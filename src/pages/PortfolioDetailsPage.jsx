import '../styles/style.css';
import './PortfolioDetailsPage.css';
import { Navigate, useParams } from 'react-router-dom';

export default function PortfolioDetailsPage() {

    const { cardId } = useParams();
    const validCardIds = ['1', '2', '3', '4', '5', '6', '7', '8'];

    if (!validCardIds.includes(cardId)) {
        return (<Navigate to="/404" />);
    }

    return (
        <div className="container">
            <div className="row portfolio-details-row">
                <p>Card ID: {cardId}</p>
                {console.log("ATO AM RETOUR")}
            </div>
        </div>
    );
}
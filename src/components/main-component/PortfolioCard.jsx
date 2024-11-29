import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import defaultWorkImage from '../../assets/images/image_empty.png';

export default function PortfolioCard({ to, workType, image, altImg, workTitle, workSubtitle, text, listeTechno }) {
    return (
        <div className={"work_card " + workType}>
            <div className="img_content">
                <img src={image} alt={altImg} className="work_img" /><span></span>
            </div>
            <span className="work_title">{workTitle}</span>
            <span className="work_subtitle">{workSubtitle}</span>
            <p className="work_text">{text}</p>
            <div className="work_techno">
                {listeTechno.map((techno, index) => (
                    <span key={index} className="techno_item">{techno}</span>
                ))
                }
            </div>
            <Link to={to}>
                <span className="work_button">
                    Plus de détails
                    <i className="work_button-icon bx bx-right-arrow-alt"></i>
                </span>
            </Link>
        </div>
    );
}

// default value
PortfolioCard.defaultProps = {
    image: defaultWorkImage,
    altImg: 'Pas d"image',
};

// validation
PortfolioCard.propTypes = {
    workType: PropTypes.oneOf(["web", "desktop", "mobile", "autres"]).isRequired,
    image: PropTypes.string,
    altImg: PropTypes.string.isRequired,
    workTitle: PropTypes.string.isRequired,
    workSubtitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};
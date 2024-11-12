import image_andy from '../../assets/images/ANDY-NO_BACKGROUND.png';
import ButtonDefault from "../button-component/ButtonDefault";

export default function SectionHome() {
    return (
        <section className="home section" id="home">
            <div className="container">
                <div className="row">
                    {/* <!-- avatar image --> */}
                    <div className="home-img">
                        <img src={image_andy} alt="sitraka andy"/>
                    </div>
                    {/* <!-- intro --> */}
                    <div className="intro">
                        <h3>Hello! Welcome to my portfolio, i'm</h3>
                        <h1>Sitraka AndY</h1>
                        <h3>a <span className="info-text">" professional developper "</span></h3>
                        <p className="intro-text">With my expertise and versatility, I'm capable of carrying out application development projects, 
                            whether web-based or desktop. I am seeking new opportunities to leverage my skills and take on exciting challenges.
                        </p>
                        {/* <!-- btn --> */}
                        <ButtonDefault href="#" label="contact me"/>
                        {/* <!-- social icon --> */}
                        <ul className="social-icons">
                            <li><a href="#"><i className="bx bxl-gmail"></i></a></li>
                            <li><a href="#"><i className="bx bxl-linkedin"></i></a></li>
                            <li><a href="#"><i className="bx bxl-facebook"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
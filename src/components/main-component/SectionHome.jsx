import image_andy from '../../assets/images/ANDY-NO_BACKGROUND.png';
import ButtonDefault from "../button-component/ButtonDefault";
import React, { useEffect, useRef } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function SectionHome() {
    const containerRef = useRef(null);
    useEffect(() => {
        Aos.init();
    },[]);
    return (
        <section ref={containerRef} className="home section" id="home">
            <div className="container">
                <div className="row">
                    {/* <!-- avatar image --> */}
                    <div className="home-img" data-aos="zoom-out-right" data-aos-duration="1000">
                        <img src={image_andy} alt="sitraka andy"/>
                    </div>
                    {/* <!-- intro --> */}
                    <div className="intro" data-aos="zoom-out-left" data-aos-duration="1000">
                        <h3>Bonjour ! Bienvenue sur mon portfolio, c'est</h3>
                        <h1>Sitraka AndY</h1>
                        <h3>un <span className="info-text">" développeur professionnel "</span></h3>
                        <p className="intro-text">Avec mon expertise, je suis en mesure de réaliser des projets de développement d'applications, qu'ils soient web ou desktop. Je suis à la recherche de nouvelles opportunités pour mettre à profit mes compétences et relever des défis stimulants.</p>
                        {/* <!-- btn --> */}
                        <ButtonDefault href="#" label="contactez-moi"/>
                        {/* <!-- social icon --> */}
                        <ul className="social-icons">
                            <li><a href="#home"><i className="bx bxl-gmail"></i></a></li>
                            <li><a href="#home"><i className="bx bxl-linkedin"></i></a></li>
                            <li><a href="#home"><i className="bx bxl-facebook"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
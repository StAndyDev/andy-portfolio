import image_andy from '../../assets/images/ANDY-NO_BACKGROUND.png';
import ButtonDefault from "../button-component/ButtonDefault";
import React, { useEffect, useRef } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';

const AnimatedText = () => (
  <Typewriter
    options={{
        strings: ['Développeur FullStack', 'Data Analyst', 'Arrangeur&Compositeur'],
        autoStart: true,
        loop: true,
        cursor: '_',
    }}
  />
);

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
                        <span className='myname'>Sitraka Andy</span>
                        <h3 style={{display: 'inline-flex', gap: '4px', fontSize: '1.6rem'}}>un<AnimatedText/></h3>
                        <p className="intro-text">Avec mon expertise, je suis en mesure de réaliser des projets de développement d'applications,
                             qu'ils soient web, desktop ou mobile. Et je suis à la recherche de nouvelles opportunités pour mettre à profit mes compétences et relever des défis tout en continuant d'apprendre et d'évoluer.</p>
                        {/* <!-- btn --> */}
                        <ButtonDefault href="#contact" label="contactez-moi" boxIconName="bx bx-phone"/>
                        {/* <!-- social icon --> */}
                        <ul className="social-icons">
                            <li><a href="mailto:sitrakaandrianirina777@gmail.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-gmail"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/sitraka-andy" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin"></i></a></li>
                            <li><a href="https://wa.me/+261334762107" target="_blank" rel="noopener noreferrer"><i className="bx bxl-whatsapp"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
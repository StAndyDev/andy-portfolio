import image_andy from '../../assets/images/ANDY-NO_BACKGROUND.png';
import ButtonDefault from "../button-component/ButtonDefault";
import React, { useRef } from 'react';
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
    return (
        <section ref={containerRef} className="home section" id="home">
            <div className="container">
                <div className="row">
                    {/* <!-- avatar image --> */}
                    <div className="home-img home-img_animation">
                        <img src={image_andy} alt="sitraka andy"/>
                    </div>
                    {/* <!-- intro --> */}
                    <div className="intro home-intro_animation">
                        <h3>Bonjour ! Bienvenue sur mon portfolio, c'est</h3>
                        <span className='myname'>Sitraka Andy</span>
                        <h3 style={{display: 'inline-flex', gap: '4px', fontSize: '1.6rem'}}>un<AnimatedText/></h3>
                        <p className="intro-text">
                        Engagé par l'innovation, j’excelle dans la réalisation de projets diversifiés : web, desktop ou mobile. 
                        Mon ambition est d’utiliser mes compétences pour concevoir des outils technologiques qui simplifient
                         la vie des utilisateurs. Toujours curieux, je cherche des opportunités 
                         où je peux apprendre tout en explorant de nouvelles technologies pour relever des défis.
                        </p>
                        {/* <!-- btn --> */}
                        <ButtonDefault href="#contact" label="contactez-moi" boxIconName="bx bx-phone"/>
                        {/* <!-- social icon --> */}
                        <ul className="social-icons">
                            <li className='social-icons_animation'><a href="mailto:sitrakaandrianirina777@gmail.com" target="_blank" rel="noopener noreferrer"><i className="bx bxl-gmail"></i></a></li>
                            <li className='social-icons_animation'><a href="https://www.linkedin.com/in/sitraka-andy" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin"></i></a></li>
                            <li className='social-icons_animation'><a href="https://wa.me/+261334762107" target="_blank" rel="noopener noreferrer"><i className="bx bxl-whatsapp"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
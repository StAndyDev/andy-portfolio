import SectionTitle from "./SectionTitle";
import React, { Suspense } from 'react';
import ButtonDefault from "../button-component/ButtonDefault";
import SwiperCarousel from "../carousel-component/SwiperCarousel";

const Scene3D = React.lazy(() => import("../other-component/Scene3D"));   //Async
export default function SectionAbout() {
    return (
        <section className="about section" id="about">
            {/* <!-- section title --> */}
            <SectionTitle sectionTitle="A PROPOS"/>
            <div className="container">
                {/* first row */}
                <div className="row">
                    {/* about content */}
                    <div className="about-content padd-15" data-aos="fade-right" data-aos-duration="500" data-aos-offset="200">
                        <h2 style={{ textAlign: 'center' }}>Qui suis je?</h2>
                        <p className="intro-text">
                            Je m'appelle ANDRIANIRINA Sitraka Fiderana, également connu sous le nom de Sitraka Andy &#128512;, étudiant à l'<a href="https://www.emit.mg" style={{ fontStyle: 'italic' }}>EMIT</a>.
                            J'ai récemment terminé mon cursus de Master(M2). En attente de ma soutenance pour l'obtention officielle de mon diplôme, 
                            je suis activement à la recherche d'une opportunité professionnelle dans le domaine du développement &#128522;.
                        </p>
                        <h2 style={{ textAlign: 'center' }}>Diplôme en informatique</h2>
                        <div>
                            <ul className="list-formation">
                                <li className="formation-item">
                                    <i className='bx bx-shield-plus'></i>
                                    <p>2024 | Préparation de Diplôme de Master en Modélisation et Ingéniérie Informatique à l'EMIT.</p>
                                    <span>recherche d'un opportunité professionnel et préparation d'une mémoire de fin d'etude</span>
                                </li>
                                <li className="formation-item">
                                    <i className='bx bx-check-shield'></i>
                                    <p>2022 | Diplôme de Licence en Génie Logiciel et Système d'Information à l'ISMT.</p>
                                    <span>stage et obtention de diplôme de licence professionnel avec mention bien</span>

                                </li>
                                <li className="formation-item">
                                    <i className='bx bx-check-shield'></i>
                                    <p>2021 | DTS(Diplôme de technicien supérieur en Informatique) à l'ISMT.</p>
                                    <span>stage et obtention d'un DTS en développement d'application intranet et internet</span>
                                </li>
                            </ul>
                            <ButtonDefault href="#about" label="telecharger mon cv" boxIconName="bx bx-download" />
                        </div>

                    </div>
                    {/* sphere content */}
                    <div className="sphere-content" data-aos="fade-left" data-aos-duration="500" data-aos-offset="200">
                        <h2 style={{ textAlign: 'center' }}>Mon univers de compétences</h2>
                        <p className="info">&#123; tourner la sphère pour explorer &#125;</p>
                        <Suspense fallback={<div>Chargement du rendu...</div>}>
                            <Scene3D />
                        </Suspense>
                    </div>
                </div>
            </div>
            {/* second row */}
            <div className="carousel-content" data-aos="zoom-in" data-aos-duration="500" data-aos-offset="200">
                <h2 style={{ textAlign: 'center' }}>les technologies que j'ai utilisées récemment</h2>
                <div className="image_slide_content">
                    <SwiperCarousel />
                </div>
            </div>
        </section>
    );
}
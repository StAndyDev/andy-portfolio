import SectionTitle from "./SectionTitle";
import React, { Suspense } from 'react';
import ButtonDefault from "../button-component/ButtonDefault";

const Scene3D = React.lazy(() => import("../other-component/Scene3D"));   //Async
export default function SectionAbout() {
    return (
        <section className="about section" id="about">
            <div className="container">
                {/* <!-- section title --> */}
                <SectionTitle sectionTitle="About me" />
                <div className="row">
                    <div className="about-content padd-15">
                        <h2>Qui suis je?</h2>
                        <p className="intro-text">être programmeur pour moi, c'est de la passion, j'avait étudier le base de programmation avec la langage c avant mon cursus universitaire, 
                            lorsque j'ai étudier en université, j'ai commencé à apprendre le base du web avec html/css et js, puis php et java quand j'ai découvert le developpement desktop,
                            après avoir vécu plusieures choses en dev desktop, j'ai focalisé sur le dev 
                        </p>
                        {/* <!-- btn --> */}
                        <ButtonDefault href="#" label="download cv"/>
                        {/* <!-- social icon --> */}
                        <ul className="social-icons">
                            <li><a href="#"><i className="bx bxl-gmail"></i></a></li>
                            <li><a href="#"><i className="bx bxl-linkedin"></i></a></li>
                            <li><a href="#"><i className="bx bxl-facebook"></i></a></li>
                        </ul>
                    </div>
                    <div className="sphere-content">
                        <Suspense fallback={<div>Chargement du rendu...</div>}>
                            <Scene3D />
                        </Suspense>
                    </div>
                </div>
            </div>
        </section>
    );
}
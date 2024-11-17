import SectionTitle from "./SectionTitle";
import React, { Suspense } from 'react';
import ButtonDefault from "../button-component/ButtonDefault";
import PauseOnHover from "../carousel-component/PauseOnHover";

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
                        <p className="intro-text" style={{ textAlign: 'left' }}>Je m'appelle <strong>ANDRIANIRINA Sitraka Fiderana</strong>, mais je préfère que l'on m'appelle <strong>Sitraka Andy</strong>.
                            Ma passion pour la programmation a commencé avant même mes études universitaires, lorsque j'ai appris les bases de la programmation en langage C.
                            Pendant ma première année à l'université, j'ai étudié le développement web avec HTML, CSS, et JavaScript, puis j'ai continué avec PHP et Java, ce dernier m'ayant permis de découvrir le développement d'applications de bureau.

                            Après, je me suis orienté vers le développement web et ses frameworks. J'ai ensuite élargi mes compétences en explorant les technologie web
                            et les APIs, l’IoT, l’analyse de données spatiales, l’IA et l’intelligence d’affaires. Aujourd’hui, je me concentre principalement sur le développement web.
                        </p>
                        <h2>je suis à l'aise avec :</h2>
                        
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <PauseOnHover/>
                        </div>
                        
                        <h3>savoir plus sur moi?</h3>
                        <ButtonDefault href="#" label="download cv" />
                    </div>
                    <div className="sphere-content">
                        <h2 style={{ textAlign: 'center' }}>My Skills</h2>
                        <Suspense fallback={<div>Chargement du rendu...</div>}>
                            <Scene3D />
                        </Suspense>
                    </div>
                </div>
            </div>
        </section>
    );
}
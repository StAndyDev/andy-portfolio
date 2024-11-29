import SectionTitle from "./SectionTitle";
import React, { useEffect, useRef } from 'react';
import mixitup from "mixitup";  // nous avons utilisés mixitup pour manupiler les dom avec animation
import AOS from 'aos';  // c juste pour le callbacks
import PortfolioCard from "./PortfolioCard";

import ImagePortfolio from '../../assets/images/Annotation 2024-11-26 220135.png';
import ImageUfBot from '../../assets/images/uf-bot_image.png';
import ImageGae from '../../assets/images/gae_image.png';
import ImageGescompta from '../../assets/images/gescompta-icon.png';
import ImageGaeWeb from '../../assets/images/gae_web.png';
import ImageAndroyOLAP from '../../assets/images/entrepot.png';

export default function SectionPortfolio() {
    const containerRef = useRef(null);
    useEffect(() => {

        mixitup(containerRef.current, {
            selectors: {
                target: ".work_card"
            },
            animation: {
                duration: 300
            },
            callbacks: {
                onMixEnd: function () {
                    AOS.refresh();  // Réinitialiser AOS après le filtrage
                },

            }

        });

        // lien actif
        const linkWork = document.querySelectorAll('.work_item');
        function activeWork() {
            linkWork.forEach(l => l.classList.remove('active-work'));
            this.classList.add('active-work');
        }
        linkWork.forEach(l => l.addEventListener("click", activeWork));

    }, []);

    // portfolio techno list items
    const technoPortfolio = ["React", "ThreeJS", "HTML5", "CSS3"];
    const technoUfBot = ["Django", "JS", "Bootstrap", "TensorFlow"];
    const technoGae = ["javaSE", "SWING/AWT", "MySQL", "XML"];
    const technoGescompta = ["javaSE", "SWING/AWT", "HSQL"];
    const technoGaeWeb = ["JavaEE", "JPA", "JBOSS", "MySQL"];
    const technoNoteIt = ["Ionic", "Angular", "Typescript", "Django", "RestFramework", "SQLite"];
    const technoGestionBillet = ["Flask", "Bootstrap", "JS", "MySQL"];
    const technoAndroyOLAP = ["OpenStat", "PowerBI", "SpagoBI", "Talend", "PostgreSQL"];

    return (
        <section ref={containerRef} className="portfolio section" id="portfolio">
            <div className="container">
                {/* <!-- section title --> */}
                <SectionTitle sectionTitle="Portfolio" />
                <div className="row">
                    {/* menu */}
                    <div className="work_filters" data-aos="zoom-in-up" data-aos-duration="500" data-aos-offset="100">
                        <span className="work_item active-work" data-filter="all">Tout</span>
                        <span className="work_item" data-filter=".web">Web</span>
                        <span className="work_item" data-filter=".desktop">Desktop</span>
                        <span className="work_item" data-filter=".mobile">Mobile</span>
                        <span className="work_item" data-filter=".autres">Autres</span>
                    </div>

                    {/* ====== conteneur ======= */}
                    <div className="work_conteneur conteneur grid" data-aos="fade-down" data-aos-duration="1000" data-aos-offset="100">

                            {/* ANDY PORTF */}
                            <PortfolioCard
                                to="/details"   //link
                                workType={"web"}
                                image={ImagePortfolio}
                                altImg="andy portfolio"
                                workTitle={"MY PORTFOLIO"}
                                workSubtitle={"Andy portfolio v1"}
                                text={" La premier version de mon portfolio sur lequel j'ai débuté à utiliser React pour la première fois, et ça c'est ma deuxième utilisation de framework front-end après angular."}
                                listeTechno={technoPortfolio}
                            />
                            {/* UF-BOT */}
                            <PortfolioCard
                                to="/details/2"   //link
                                workType={"web"}
                                image={ImageUfBot}
                                altImg="uf-bot"
                                workTitle={"UF-BOT"}
                                workSubtitle={"chatbot de l'université de F/tsoa"}
                                text={" Un chatbot pour une quête d'information, ce projet me permet de collaborer avec mon collegue, mon responsabilité est d'occupé la côté front-end et aussi la contribution à la création du modèle d'IA."}
                                listeTechno={technoUfBot}
                            />
                            {/* GAE */}
                            <PortfolioCard
                            to="/details/2"
                                workType={"desktop"}
                                image={ImageGae}
                                altImg="gae_img"
                                workTitle={"G.A.E"}
                                workSubtitle={"gestion des autorisations d'enseigner"}
                                text={" Une application desktop avec une interface moderne conçu pour gerer la migration de données excel vers une base de données MySQL et gerer plusieurs gestion sur l'autorisations d'enseignements "}
                                listeTechno={technoGae}
                            />
                            {/* GESCOMPTA */}
                            <PortfolioCard
                            to="/details/2"
                                workType={"desktop"}
                                image={ImageGescompta}
                                altImg="gescompta_img"
                                workTitle={"GESCOMPTA"}
                                workSubtitle={"gestion de comptabilité administratif"}
                                text={" Une application simple et robuste gerant les matières entrant et sortant plus particulièremnt dans un service administratif et capable des gerer aussi de comptabilisé les soldes par ans "}
                                listeTechno={technoGescompta}
                            />

                            {/* GAE WEB */}
                            <PortfolioCard
                            to="/details/2"
                                workType={"web"}
                                image={ImageGaeWeb}
                                altImg="gae_web img"
                                workTitle={"G.A.E Web"}
                                workSubtitle={"gestion d'autorisation d'enseigner web"}
                                text={" une version web de l'application de gestion d'autorisation d'enseigner "}
                                listeTechno={technoGaeWeb}
                            />

                            {/* NoteIt App */}
                            <PortfolioCard
                            to="/details/2"
                                workType={"mobile"}
                                workTitle={"NOTE-IT"}
                                workSubtitle={"block note"}
                                text={" une application de bloc note simple qui peut être utiliser par plusieurs appareil "}
                                listeTechno={technoNoteIt}
                            />

                            {/* Gestion de Billet de transport */}
                            <PortfolioCard
                            to="/details/2"
                                workType={"web"}
                                workTitle={"Gestion de Billet"}
                                workSubtitle={"Gestion de billet de transport"}
                                text={" une application qui permet de gerer les réservation de voyages etc "}
                                listeTechno={technoGestionBillet}
                            />
                            {/* ANDROY CUBE OLAP */}
                            <PortfolioCard
                            to="/details/2"
                                workType={"autres"}
                                image={ImageAndroyOLAP}
                                altImg="androy olap"
                                workTitle={"OLAP"}
                                workSubtitle={"entrepot de données"}
                                text={" une version web de l'application de gestion d'autorisation d'enseigner "}
                                listeTechno={technoAndroyOLAP}
                            />

                    </div>
                    
                </div>
            </div>

        </section>

    );
}
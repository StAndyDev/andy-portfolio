import SectionTitle from "./SectionTitle";
import React, { useEffect, useRef } from 'react';
import mixitup from "mixitup";  // nous avons utilisés mixitup pour manupiler les dom avec animation
import AOS from 'aos';  // c juste pour le callbacks
import PortfolioCard from "./PortfolioCard";

import ImagePortfolio_1 from '../../assets/images/Annotation 2024-11-26 220135.png';
import ImageUfBot_1 from '../../assets/images/uf-bot_image.png';
import ImageGae_1 from '../../assets/images/gae_image.png';
import ImageGescompta_1 from '../../assets/images/gescompta-icon.png';
import ImageGaeWeb_1 from '../../assets/images/gae_web.png';
import ImageAndroyOLAP_1 from '../../assets/images/entrepot.png';

// portfolio techno list
export const projectList = [
    { 
        id: 1, 
        workType : "web",
        image : [ImagePortfolio_1],
        altImg : "andy portfolio",
        workTitle : "MY PORTFOLIO",
        workSubtitle : "Andy portfolio v1",
        text : " La premier version de mon portfolio sur lequel j'ai débuté à utiliser React pour la première fois, et ça c'est ma deuxième utilisation de framework front-end après angular.",
        listeTechno: ["React", "ThreeJS", "HTML5", "CSS3"]
    },
    { 
        id: 2,
        workType : "web",
        image : [ImageUfBot_1],
        altImg : "uf-bot",
        workTitle : "UF-BOT",
        workSubtitle : "chatbot de l'université de F/tsoa",
        text : " Un chatbot pour une quête d'information, ce projet me permet de collaborer avec mon collegue, mon responsabilité est d'occupé la côté front-end et aussi la contribution à la création du modèle d'IA.",
        listeTechno : ["Django", "JS", "Bootstrap", "TensorFlow"]
    },
    { 
        id: 3,
        workType : "desktop",
        image : [ImageGae_1],
        altImg : "gae_img",
        workTitle : "G.A.E",
        workSubtitle : "gestion des autorisations d'enseigner",
        text : " Une application desktop avec une interface moderne conçu pour gerer la migration de données excel vers une base de données MySQL et gerer plusieurs gestion sur l'autorisations d'enseignements.",
        listeTechno: ["javaSE", "SWING/AWT", "MySQL", "XML"]
    },
    { 
        id: 4,
        workType : "desktop",
        image : [ImageGescompta_1],
        altImg : "gescompta_img",
        workTitle : "GESCOMPTA",
        workSubtitle : "gestion de comptabilité administratif",
        text : "Une application simple et robuste gerant les matières entrant et sortant plus particulièremnt dans un service administratif et capable des gerer aussi de comptabilisé les soldes par ans.",
        listeTechno: ["javaSE", "SWING/AWT", "HSQL"]
    },
    { 
        id: 5,
        workType : "web",
        image : [ImageGaeWeb_1],
        altImg : "gae_web img",
        workTitle : "G.A.E Web",
        workSubtitle : "gestion d'autorisation d'enseigner web",
        text : " une version web de l'application de gestion d'autorisation d'enseigner ",
        listeTechno: ["JavaEE", "JPA", "JBOSS", "MySQL"]
    },
    { 
        id: 6,
        workType : "mobile",
        image : [],
        altImg : null,
        workTitle : "NOTE-IT",
        workSubtitle : "block note",
        text : "une application de bloc note simple qui peut être utiliser par plusieurs appareil.",
        listeTechno: ["Ionic", "Angular", "Typescript", "Django", "RestFramework", "SQLite"]
    },
    { 
        id: 7,
        workType : "web",
        image : [],
        altImg : null,
        workTitle : "Gestion de Billet",
        workSubtitle : "Gestion de billet de transport",
        text : "une application qui permet de gerer les réservation de voyages etc.",
        listeTechno: ["Flask", "Bootstrap", "JS", "MySQL"]
    },
    { 
        id: 8,
        workType : "autres",
        image : [ImageAndroyOLAP_1],
        altImg : "androy olap",
        workTitle : "OLAP",
        workSubtitle : "entrepot de données",
        text : "une version web de l'application de gestion d'autorisation d'enseigner.",
        listeTechno: ["OpenStat", "PowerBI", "SpagoBI", "Talend", "PostgreSQL"]
    }
  ];
  

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
                        
                        {projectList.map((proj) => (
                            <PortfolioCard
                                to={"project/details/" + proj.id}   //link
                                workType={proj.workType}
                                image={proj.image[0]}
                                altImg={proj.altImg}
                                workTitle={proj.workTitle}
                                workSubtitle={proj.workSubtitle}
                                text={proj.text}
                                listeTechno={proj.listeTechno}
                            />
                        ))}

                    </div>
                    
                </div>
            </div>

        </section>

    );
}
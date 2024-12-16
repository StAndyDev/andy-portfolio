import SectionTitle from "./SectionTitle";
import React, { useEffect, useRef } from 'react';
import mixitup from "mixitup";  // nous avons utilisés mixitup pour manupiler les dom avec animation
import AOS from 'aos';  // c juste pour le callbacks
import PortfolioCard from "./PortfolioCard";

import ImagePortfolio_1 from '../../assets/images/Annotation 2024-11-26 220135.png';
import ImagePortfolio_2 from '../../assets/images/Annotation 2024-12-03 165140.png';

import ImageUfBot_1 from '../../assets/images/uf-bot_image.png';
import ImageGae_1 from '../../assets/images/gae_image.png';
import ImageGescompta_1 from '../../assets/images/gescompta-icon.png';
import ImageGaeWeb_1 from '../../assets/images/gae_web.png';
import ImageAndroyOLAP_1 from '../../assets/images/entrepot.png';

// portfolio techno list
export const projectList = [
    {   // andy portfolio
        id: 1,
        workType: "web",
        image: [ImagePortfolio_1, ImagePortfolio_2],
        altImg: "andy portfolio",
        workTitle: "MY PORTFOLIO",
        workSubtitle: "Andy portfolio v1",
        text: " La premier version de mon portfolio sur lequel j'ai débuté à utiliser React pour la première fois, et ça c'est ma deuxième utilisation de framework front-end après angular.",
        listeTechno: ["React", "ThreeJS", "HTML5", "CSS3"]
    },
    {   // i-kandra back-end
        id: 2,
        workType: "web",
        image: [],
        altImg: "i-kandra image",
        workTitle: "I-KANDRA BACKEND",
        workSubtitle: "back-end",
        text: " La premier version de mon portfolio sur lequel j'ai débuté à utiliser React pour la première fois, et ça c'est ma deuxième utilisation de framework front-end après angular.",
        listeTechno: ["React", "ThreeJS", "HTML5", "CSS3"]
    },
    {   // uf-bot
        id: 3,
        workType: "web",
        image: [ImageUfBot_1],
        altImg: "uf-bot",
        workTitle: "UF-BOT",
        workSubtitle: "chatbot de l'université de F/tsoa",
        text: " Un chatbot pour une quête d'information, ce projet me permet de collaborer avec mon collegue, mon responsabilité est d'occupé la côté front-end et aussi la contribution à la création du modèle d'IA.",
        listeTechno: ["Django", "JS", "Bootstrap", "TensorFlow"]
    },
    {   // gae
        id: 4,
        workType: "desktop",
        image: [ImageGae_1],
        altImg: "gae_img",
        workTitle: "G.A.E",
        workSubtitle: "gestion des autorisations d'enseigner",
        text: " Une application desktop avec une interface moderne conçu pour gerer la migration de données excel vers une base de données MySQL et gerer plusieurs gestion sur l'autorisations d'enseignements.",
        listeTechno: ["javaSE", "SWING/AWT", "MySQL", "XML"]
    },
    {   // gescompta
        id: 5,
        workType: "desktop",
        image: [ImageGescompta_1],
        altImg: "gescompta_img",
        workTitle: "GESCOMPTA",
        workSubtitle: "gestion de comptabilité administratif",
        text: "Une application simple et robuste gerant les matières entrant et sortant plus particulièremnt dans un service administratif et capable des gerer aussi de comptabilisé les soldes par ans.",
        listeTechno: ["javaSE", "SWING/AWT", "HSQL"]
    },
    {   // gae web
        id: 6,
        workType: "web",
        image: [ImageGaeWeb_1],
        altImg: "gae_web img",
        workTitle: "G.A.E Web",
        workSubtitle: "gestion d'autorisation d'enseigner web",
        text: " une version web de l'application de gestion d'autorisation d'enseigner ",
        listeTechno: ["JavaEE", "JPA", "JBOSS", "MySQL"]
    },
    {   // note-it
        id: 7,
        workType: "mobile",
        image: [],
        altImg: "",
        workTitle: "NOTE-IT",
        workSubtitle: "block note",
        text: "une application de bloc note simple qui peut être utiliser par plusieurs appareil.",
        listeTechno: ["Ionic", "Angular", "Typescript", "Django", "RestFramework", "SQLite"]
    },
    {   // gestion de billet
        id: 8,
        workType: "web",
        image: [],
        altImg: "",
        workTitle: "Gestion de Billet",
        workSubtitle: "Gestion de billet de transport",
        text: "une application qui permet de gerer les réservation de voyages etc.",
        listeTechno: ["Flask", "Bootstrap", "JS", "MySQL"]
    },
    {   // androy olap
        id: 9,
        workType: "autres",
        image: [ImageAndroyOLAP_1],
        altImg: "androy olap",
        workTitle: "OLAP",
        workSubtitle: "entrepot de données",
        text: "une version web de l'application de gestion d'autorisation d'enseigner.",
        listeTechno: ["OpenStat", "PowerBI", "SpagoBI", "Talend", "PostgreSQL"]
    },
    {   // gestion de stock de boisons
        id: 10,
        workType: "web",
        image: [],
        altImg: "star stock",
        workTitle: "STAR-SOTCK",
        workSubtitle: "gestion de stock",
        text: "une version web de l'application de gestion d'autorisation d'enseigner.",
        listeTechno: ["OpenStat", "PowerBI", "SpagoBI", "Talend", "PostgreSQL"]
    }
    ,
    {   // iarintsena
        id: 11,
        workType: "autres",
        image: [],
        altImg: "iarintsena img",
        workTitle: "Iarintsena Spatial Analysis",
        workSubtitle: "analyse de données décisionnel d'Iarintsena",
        text: "une version web de l'application de gestion d'autorisation d'enseigner.",
        listeTechno: ["OpenStat", "PowerBI", "SpagoBI", "Talend", "PostgreSQL"]
    }
    ,
    {   // teny
        id: 12,
        workType: "autres",
        image: [],
        altImg: "img teny vitsy",
        workTitle: "Teny Vitsy",
        workSubtitle: "arrangeur de teny vitsy",
        text: "une version web de l'application de gestion d'autorisation d'enseigner.",
        listeTechno: ["OpenStat", "PowerBI", "SpagoBI", "Talend", "PostgreSQL"]
    }
];

export default function SectionPortfolio() {
    const containerRef = useRef(null);
    useEffect(() => {
        const mixer = mixitup(containerRef.current, {
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

        return () => {
            mixer.destroy(); // Détruit MixItUp pour éviter les conflits
        };
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
                    <div className="work_conteneur conteneur grid">

                        {projectList.map((proj) => (
                            <PortfolioCard
                                key={proj.id}
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
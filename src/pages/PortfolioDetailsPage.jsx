import '../styles/style.css';
import './PortfolioDetailsPage.css';
import { Navigate, useParams, Link } from 'react-router-dom';
import { projectList } from '../components/main-component/SectionPortfolio';
import SectionTitle from '../components/main-component/SectionTitle';

import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import ScrollToTop from '../ScrollToTop';

// -------------- CAROUSEL -----------------
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

let index;  //index du json

const Carousel = () => {
    return (
        <>
            <Swiper
                grabCursor={true}
                autoHeight={true}
                lazy={1}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                // autoplay={{
                //     delay: 3000,
                //     disableOnInteraction: false,
                // }}
                autoplay={false}
                loop={true}
                className="mySwiper"
            >

                {projectList[index].image.map((sary, i) => (
                    <SwiperSlide
                        key={projectList[index].image[i]}>
                        <img
                            src={sary}
                            alt={projectList[index].altImg}
                            loading="lazy"
                        />
                        <div className="overlay"></div>

                        <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

// -------------- NESTED LIST -----------------
const NestedList = () => {

    const [openWebCateg, setOpenWebCateg] = useState(false);
    const [openDesktopCateg, setOpenDesktopCateg] = useState(false);
    const [openMobileCateg, setOpenMobileCateg] = useState(false);
    const [openAutresCateg, setOpenAutresCateg] = useState(false);

    const toggleWebCateg = () => setOpenWebCateg(!openWebCateg);
    const toggleDesktopCateg = () => setOpenDesktopCateg(!openDesktopCateg);
    const toggleMobileCateg = () => setOpenMobileCateg(!openMobileCateg);
    const toggleAutresCateg = () => setOpenAutresCateg(!openAutresCateg);

    return (
        <List component="nav">

            {/* Catégorie WEB */}
            <ListItem onClick={toggleWebCateg}>
                <ListItemText primary="WEB" />
                <i className={`bx ${openWebCateg ? 'bx-chevron-up' : 'bx-chevron-down'}`}></i>
            </ListItem>
            <Collapse in={openWebCateg} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {projectList.map((techno) => (
                        (techno.workType === "web")? (
                            <ListItem key={techno.id} sx={{ pl: 4 }}>
                                <ListItemIcon sx={{ marginRight: -3 }}>
                                    <i className={'icon_project_categ bx bx-globe'}></i>
                                </ListItemIcon>
                                <Link to={"/project/details/" + techno.id}>
                                    <ListItemText primary={techno.workTitle} />
                                </Link>
                                
                            </ListItem>
                        ) : null
                    ))}
                </List>
            </Collapse>

            {/* Catégorie DESKTOP */}
            <ListItem onClick={toggleDesktopCateg}>
                <ListItemText primary="DESKTOP" />
                <i className={`bx ${openDesktopCateg ? 'bx-chevron-up' : 'bx-chevron-down'}`}></i>
            </ListItem>
            <Collapse in={openDesktopCateg} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {projectList.map((techno) => (
                        (techno.workType === "desktop")? (
                            <ListItem key={techno.id} sx={{ pl: 4 }}>
                                <ListItemIcon sx={{ marginRight: -3 }}>
                                    <i className={'icon_project_categ bx bx-desktop'}></i>
                                </ListItemIcon>
                                <Link to={"/project/details/" + techno.id}>
                                    <ListItemText primary={techno.workTitle} />
                                </Link>
                                
                            </ListItem>
                        ) : null
                    ))}
                </List>
            </Collapse>

            {/* Catégorie MOBILE */}
            <ListItem onClick={toggleMobileCateg}>
                <ListItemText primary="MOBILE" />
                <i className={`bx ${openMobileCateg ? 'bx-chevron-up' : 'bx-chevron-down'}`}></i>
            </ListItem>
            <Collapse in={openMobileCateg} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {projectList.map((techno) => (
                        (techno.workType === "mobile")? (
                            <ListItem key={techno.id} sx={{ pl: 4 }}>
                                <ListItemIcon sx={{ marginRight: -3 }}>
                                    <i className={'icon_project_categ bx bx-mobile'}></i>
                                </ListItemIcon>
                                <Link to={"/project/details/" + techno.id}>
                                    <ListItemText primary={techno.workTitle} />
                                </Link>
                                
                            </ListItem>
                        ) : null
                    ))}
                </List>
            </Collapse>

            {/* Catégorie AUTRES */}
            <ListItem onClick={toggleAutresCateg}>
                <ListItemText primary="AUTRES" />
                <i className={`bx ${openAutresCateg ? 'bx-chevron-up' : 'bx-chevron-down'}`}></i>
            </ListItem>
            <Collapse in={openAutresCateg} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {projectList.map((techno) => (
                        (techno.workType === "autres")? (
                            <ListItem key={techno.id} sx={{ pl: 4 }}>
                                <ListItemIcon sx={{ marginRight: -3 }}>
                                    <i className={'icon_project_categ bx bx-folder'}></i>
                                </ListItemIcon>
                                <Link to={"/project/details/" + techno.id}>
                                    <ListItemText primary={techno.workTitle} />
                                </Link>
                                
                            </ListItem>
                        ) : null
                    ))}
                </List>
            </Collapse>


        </List>
    );
};


// --------- PORTFOLIO DETAILS -------------
export default function PortfolioDetailsPage() {
    

    const { cardId } = useParams();
    const validCardIds = [];
    // recupération de l'index de params dans projectList
    for (let data of projectList) {
        validCardIds.push(data.id.toString());
        if (validCardIds.includes(cardId)) {
            index = projectList.indexOf(data);
            break;
        }
    }

    if (!validCardIds.includes(cardId)) {
        return (<Navigate to="/404" />);
    }

    return (
        <section className="portfolio-details section" id="portfolio-details">
            <ScrollToTop />
            <div className="container">
                <div>
                    <SectionTitle sectionTitle="Details Projet" />
                </div>
                <div className='title-content'>
                    <span className='second-title'>type : {projectList[index].workType} | projectID : {projectList[index].id}</span>
                    <span className='first-title'>{projectList[index].workTitle} <span className='first-subtitle'>({projectList[index].workSubtitle})</span></span>
                </div>
                <div className="row">
                    <div className='project-details'>
                        <div className='carousel-conteneur'>
                            <Carousel />
                        </div>
                        <div>
                            <div className="work_techno">
                                {projectList[index].listeTechno.map((techno, i) => (
                                    <span key={i} className="techno_item">{techno}</span>
                                ))
                                }
                            </div>
                            <p className='work_text'>{projectList[index].text}</p>
                            {/* ---- NATURE DE PROJET ----
                                Stage
                                Projet personnel
                                Travail en équipe
                                Freelance
                                Hackathon ou Compétition
                                Projet académique
                                Réalisation professionnelle
                                Contributions open source
                                Prototype ou R&D (recherche et developpement)
                                Projet communautaire 
                            */}
                            <ul className='details_list'>
                                <div className='details_item'>
                                    <i className="bx bx-buildings"></i>
                                    <li>version :</li>
                                    <p>rano</p>
                                </div>
                                
                                <div className='details_item'>
                                    <i className="bx bx-briefcase"></i>
                                    <li>nature :</li>
                                </div>
                                <div className='details_item'>
                                    <i className="bx bx-calendar"></i>
                                    <li>date :</li>
                                </div>
                                <div className='details_item'>
                                    <i className="bx bx-time-five"></i>
                                    <li>durée :</li>
                                </div>
                                <div className='details_item'>
                                    <i className="bx bx-note"></i>
                                    <li>evaluation :</li>
                                </div>
                                <div className='details_item'>
                                    <i className="bx bx-link"></i>
                                    <li>référence :</li>
                                </div>
                                <div className='details_item'>
                                    <i className="bx bx-link"></i>
                                    <li>acquis :</li>
                                </div>
                                <div className='details_item'>
                                    <i className="bx bx-link"></i>
                                    <li>remarques :</li>
                                </div>
                            </ul>
                            {/* btn */}
                            <div className="btn_to_github_conteneur">
                                <a href='' className="btn_link_to_github">
                                    <i className='bx bxl-github' style={{ fontSize: '24px' }}></i>
                                    <p>voir sur github</p>
                                </a>
                            </div>

                        </div>
                    </div>

                    {/* menu */}
                    <div className='project-categ'>
                        <NestedList />
                    </div>

                </div>
            </div>
        </section>
    );
}
import SectionTitle from "./SectionTitle";
import React, { useEffect, useRef } from 'react';
import mixitup from "mixitup";  // nous avons utilisés mixitup pour manupiler les dom avec animation
import ImageTest from '../../assets/images/ANDY-NO_BACKGROUND.png';
import ImageTest2 from '../../assets/images/dianna_agron.jpg';

export default function SectionPortfolio() {
    const containerRef = useRef(null);
    useEffect(() => {

        let mixerPortfolio = mixitup(containerRef.current, {
            selectors: {
                target: ".work_card"
            },
            animation: {
                duration: 300
            }
        });

        // lien actif
        const linkWork = document.querySelectorAll('.work_item');
        function activeWork() {
            linkWork.forEach(l => l.classList.remove('active-work'));
            this.classList.add('active-work');
        }
        linkWork.forEach(l => l.addEventListener("click", activeWork));

        // work popup
        document.addEventListener("click", (e) => {
            if(e.target.classList.contains("work_button")) {
                openPortfolioPopup();
            }
        });
        //open
        function openPortfolioPopup() {
            document.querySelector(".portfolio_popup").style.visibility = 'visible';
            document.querySelector(".portfolio_popup").style.opacity = 1;
        }
        //close
        document.querySelector('.portfolio_popup-close').addEventListener('click', () => {
            document.querySelector(".portfolio_popup").style.visibility = 'hidden';
            document.querySelector(".portfolio_popup").style.opacity = 0;
        });

    }, []);

    return (
        <section ref={containerRef} className="portfolio section" id="portfolio">
            <div className="container">
                {/* <!-- section title --> */}
                <SectionTitle sectionTitle="My Portfolio" />
                <div className="row">
                    <div className="work_filters">
                        <span className="work_item active-work" data-filter="all">Tous</span>
                        <span className="work_item" data-filter=".web">Web</span>
                        <span className="work_item" data-filter=".app">App</span>
                        <span className="work_item" data-filter=".design">Design</span>
                    </div>

                    <div className="work_conteneur conteneur grid">

                        <div className="work_card app">
                            <img src={ImageTest2} alt="image-test" className="work_img" />
                            <h3 className="work_title">Web Design</h3>
                            <span className="work_button">
                                Demo
                                <i className="work_button-icon">=--</i>
                            </span>
                            <div className="portfolio_item-details">
                                <h3 className="details_title">The service provide for design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quibusdam placeat eveniet quidem explicabo! Molestiae obcaecati incidunt</p>
                                <ul className="details_info">
                                    <li>Created - <span>4 dec 2030</span></li>
                                    <li>Technologies - <span>html css</span></li>
                                    <li>Role - <span>front-end</span></li>
                                    <li>View - <span><a href="#">www.domain.com</a></span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="work_card web">
                            <img src={ImageTest} alt="image-test" className="work_img" />
                            <h3 className="work_title">Web Design</h3>
                            <span className="work_button">
                                Demo
                                <i className="work_button-icon">=--</i>
                            </span>
                            <div className="portfolio_item-details">
                                <h3 className="details_title">The service provide for design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quibusdam placeat eveniet quidem explicabo! Molestiae obcaecati incidunt</p>
                                <ul className="details_info">
                                    <li>Created - <span>4 dec 2030</span></li>
                                    <li>Technologies - <span>html css</span></li>
                                    <li>Role - <span>front-end</span></li>
                                    <li>View - <span><a href="#">www.domain.com</a></span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="work_card app">
                            <img src={ImageTest} alt="image-test" className="work_img" />
                            <h3 className="work_title">Web Design</h3>
                            <span className="work_button">
                                Demo
                                <i className="work_button-icon">=--</i>
                            </span>
                            <div className="portfolio_item-details">
                                <h3 className="details_title">The service provide for design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quibusdam placeat eveniet quidem explicabo! Molestiae obcaecati incidunt</p>
                                <ul className="details_info">
                                    <li>Created - <span>4 dec 2030</span></li>
                                    <li>Technologies - <span>html css</span></li>
                                    <li>Role - <span>front-end</span></li>
                                    <li>View - <span><a href="#">www.domain.com</a></span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="work_card design">
                            <img src={ImageTest} alt="image-test" className="work_img" />
                            <h3 className="work_title">Web Design</h3>
                            <span className="work_button">
                                Demo
                                <i className="work_button-icon">=--</i>
                            </span>
                            <div className="portfolio_item-details">
                                <h3 className="details_title">The service provide for design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quibusdam placeat eveniet quidem explicabo! Molestiae obcaecati incidunt</p>
                                <ul className="details_info">
                                    <li>Created - <span>4 dec 2030</span></li>
                                    <li>Technologies - <span>html css</span></li>
                                    <li>Role - <span>front-end</span></li>
                                    <li>View - <span><a href="#">www.domain.com</a></span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="work_card web">
                            <img src={ImageTest} alt="image-test" className="work_img" />
                            <h3 className="work_title">Web Design</h3>
                            <span className="work_button">
                                Demo
                                <i className="work_button-icon">=--</i>
                            </span>
                            <div className="portfolio_item-details">
                                <h3 className="details_title">The service provide for design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quibusdam placeat eveniet quidem explicabo! Molestiae obcaecati incidunt</p>
                                <ul className="details_info">
                                    <li>Created - <span>4 dec 2030</span></li>
                                    <li>Technologies - <span>html css</span></li>
                                    <li>Role - <span>front-end</span></li>
                                    <li>View - <span><a href="#">www.domain.com</a></span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="work_card app">
                            <img src={ImageTest} alt="image-test" className="work_img" />
                            <h3 className="work_title">Web Design</h3>
                            <span className="work_button">
                                Demo
                                <i className="work_button-icon">=--</i>
                            </span>
                            <div className="portfolio_item-details">
                                <h3 className="details_title">The service provide for design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quibusdam placeat eveniet quidem explicabo! Molestiae obcaecati incidunt</p>
                                <ul className="details_info">
                                    <li>Created - <span>4 dec 2030</span></li>
                                    <li>Technologies - <span>html css</span></li>
                                    <li>Role - <span>front-end</span></li>
                                    <li>View - <span><a href="#">www.domain.com</a></span></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* portfolio popup */}
            <div className="portfolio_popup">
                <div className="portfolio_popup-inner">
                    <div className="portfolio_popup-content grid">
                        <span className="portfolio_popup-close"><i>--''--</i></span>
                        <div className="pp_thumbnail">
                            <img src={ImageTest} alt="" className="portfolio_popup-img" />
                        </div>
                        <div className="portfolio_popup-info">
                            <div className="portfolio_popup-subtitle">Featured - <span>Design</span></div>
                            {/* body */}
                            <div className="portfolio_popup-body">
                                <h3 className="details_title">The service provide for design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quibusdam placeat eveniet quidem explicabo! Molestiae obcaecati incidunt</p>
                                <ul className="details_info">
                                    <li>Created - <span>4 dec 2030</span></li>
                                    <li>Technologies - <span>html css</span></li>
                                    <li>Role - <span>front-end</span></li>
                                    <li>View - <span><a href="#">www.domain.com</a></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
}
import SectionTitle from "./SectionTitle";

export default function SectionServices() {
    return (
        <section className="services section" id="services">
            <div className="container">
                {/* <!-- section title --> */}
                <SectionTitle sectionTitle="Services"/>
                <div className="row">
                    {/* DEV */}
                    <div className="service-item">
                        <i className='bx bx-code-alt item-icon'></i>
                        <span className="item-title">Développement d'application</span>
                        <p className="item-text">Conception et création d’applications web, mobiles et desktop performantes, 
                            ergonomiques et adaptées à vos besoins spécifiques.</p>
                    </div>
                    {/* IA */}
                    <div className="service-item">
                        <i className='bx bx-scatter-chart item-icon'></i>
                        <span className="item-title">Intelligence artificielle</span>
                        <p className="item-text">Intégration de solutions d’IA innovantes pour automatiser vos processus, 
                            analyser vos données et optimiser vos performances.</p>
                    
                    </div>
                    {/* BI */}
                    <div className="service-item">
                        <i className='bx bx-stats item-icon'></i>
                        <span className="item-title">Business Intelligence</span>
                        <p className="item-text">Mise en place de systèmes d'analyse pour transformer vos données en informations stratégiques et 
                            faciliter vos prises de décision.</p>
                    
                    </div>
                    {/* CS */}
                    <div className="service-item">
                    <i className='bx bxl-deezer item-icon'></i>
                        <span className="item-title">Production Audio-Musicale</span>
                        <p className="item-text">Création, composition et production de musique originale pour tous vos projets, qu’il s’agisse de bandes sonores, 
                            de jingles, ou de compositions sur mesure.</p>
                    
                    </div>
                </div>
            </div>
        </section>
    );
}
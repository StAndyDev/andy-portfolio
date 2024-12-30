import SectionTitle from "./SectionTitle";

export default function SectionContact() {
    return (
        <section className="contact section" id="contact">
            <div className="container">
                {/* <!-- section title --> */}
                <SectionTitle sectionTitle="Contact"/>
                <div className="row">
                    <p className="contact-text" data-aos="zoom-in-up" data-aos-duration="500"  data-aos-offset="100">Vous recherchez un développeur passionné, polyvalent et disponible pour concrétiser vos projets ? 
                        Contactez-moi dès maintenant pour discuter de vos besoins et de vos idées. Je suis prêt à vous accompagner vers le succès.</p>
                    
                    <div className="contact-content">
                        <div className="contact-item" data-aos="fade-up" data-aos-duration="500">
                            <i className="bx bxs-map"></i>
                            <i>Antananaraivo 101 MADAGASCAR</i>
                        </div>
                        <div className="contact-item" data-aos="fade-up" data-aos-duration="1000">
                            <i className="bx bxl-gmail"></i>
                            <p>sitrakaandrianirina777@gmail.com</p>
                        </div>
                        <div className="contact-item" data-aos="fade-up" data-aos-duration="500">
                            <i className="bx bxs-phone"></i>
                            <p>+261 34 71 397 37</p>
                        </div>
                    </div>

                    <div className="other-contact">
                        <h2>autres liens</h2>
                        <div className="other-contact-content">
                            <a href="https://www.linkedin.com/in/sitraka-andy" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-duration="500"  data-aos-offset="100"> <i className="bx bxl-linkedin"> </i></a>
                            <a href="https://www.facebook.com/profile.php?id=100008396676479" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-duration="1000"  data-aos-offset="100"> <i className="bx bxl-facebook"></i> </a>
                            <a href="https://wa.me/+261334762107" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-duration="1000"  data-aos-offset="100"> <i className="bx bxl-whatsapp"></i> </a>
                            <a href="https://github.com/StAndyDev" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-duration="500"  data-aos-offset="100"> <i className="bx bxl-github"></i> </a>
                        </div>
                        <div className="thanks-message">MERCI POUR VOTRE VISITE !</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
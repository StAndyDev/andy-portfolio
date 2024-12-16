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
                        <a href="" className="contact-item" data-aos="fade-up" data-aos-duration="500">
                            <i className="bx bxs-map"></i>
                            <i>Antananaraivo 101 MADAGASCAR</i>
                        </a>
                        <a href="" className="contact-item" data-aos="fade-up" data-aos-duration="1000">
                            <i className="bx bxl-gmail"></i>
                            <p>sitrakaandrianirina777@gmail.com</p>
                        </a>
                        <a href="" className="contact-item" data-aos="fade-up" data-aos-duration="500">
                            <i className="bx bxs-phone"></i>
                            <p>+261 34 71 397 37</p>
                        </a>
                    </div>

                    <div className="other-contact">
                        <h2>autres liens</h2>
                        <div className="other-contact-content">
                            <a href="" data-aos="fade-up" data-aos-duration="500"  data-aos-offset="100"> <i className="bx bxl-linkedin"> </i></a>
                            <a href="" data-aos="fade-up" data-aos-duration="1000"  data-aos-offset="100"> <i className="bx bxl-facebook"></i> </a>
                            <a href="" data-aos="fade-up" data-aos-duration="1000"  data-aos-offset="100"> <i className="bx bxl-whatsapp"></i> </a>
                            <a href="" data-aos="fade-up" data-aos-duration="500"  data-aos-offset="100"> <i className="bx bxl-github"></i> </a>
                        </div>
                        <div>MERCI POUR LE VISITE !!!</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
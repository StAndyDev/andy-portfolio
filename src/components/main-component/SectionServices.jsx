import SectionTitle from "./SectionTitle";

export default function SectionServices() {
    return (
        <section className="services section" id="services">
            <div className="container">
                {/* <!-- section title --> */}
                <SectionTitle sectionTitle="Services"/>
                <div className="row">
                    <div className="service-items"></div>
                    <div className="service-items"></div>
                    <div className="service-items"></div>
                    <div className="service-items"></div>
                </div>
            </div>
        </section>
    );
}
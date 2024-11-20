export default function SectionTitle({sectionTitle}) {
    return(
        <div className="section-title-content" data-aos="fade-down" data-aos-duration="500"  data-aos-offset="100">
            <span className="left-title"></span>
            <h1 className="section-title padd-15" >{sectionTitle}</h1>
            <span className="right-title"></span>
        </div>
    );
}
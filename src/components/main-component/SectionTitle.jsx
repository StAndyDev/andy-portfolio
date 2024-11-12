export default function SectionTitle({sectionTitle}) {
    return(
        <div className="title-content">
            <span className="left-title"></span>
            <h1 className="section-title padd-15" >{sectionTitle}</h1>
            <span className="right-title"></span>
        </div>
    );
}
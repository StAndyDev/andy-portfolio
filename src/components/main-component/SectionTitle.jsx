export default function SectionTitle({sectionTitle}) {
    return(
        <div className="section-title-content section-title_animation">
            <span className="left-title"></span>
                <h1 className="section-title padd-15" >{sectionTitle}</h1>
            <span className="right-title"></span>
        </div>
    );
}
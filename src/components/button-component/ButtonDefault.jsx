import React from 'react';
import PropTypes from 'prop-types';

const ButtonDefault = ({ label, href, boxIconName, otherClassName, downloadFileName }) => {
    return (
        <div className={"btn-content " + {otherClassName}}>
            <a href={href} download={downloadFileName} className="btn btn-three" style={{ display: 'flex', flexDirection: 'row', gap: '4px', justifyContent: 'center', alignItems: 'center' }}>
                <i className={boxIconName} style={{ fontSize: '24px' }}></i>
                <p style={{ display: 'flex', alignItems: 'center' }}>{label}</p>
            </a>
        </div>

    );
};

ButtonDefault.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    download: PropTypes.func,
};
export default ButtonDefault;
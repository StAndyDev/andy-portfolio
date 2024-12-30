import React from 'react';
import PropTypes from 'prop-types';

const ButtonDefault = ({ label, href, boxIconName, content = 'center', downloadFileName }) => {
    return (
        <div className="box-3" style={{ display: 'flex', justifyContent: content }} >
            <a href={href} download={downloadFileName} class="btn btn-three" style={{ display: 'flex', flexDirection: 'row', gap: '4px', justifyContent: 'center', alignItems: 'center' }}>
                <i className={boxIconName} style={{ fontSize: '24px' }}></i>
                <p style={{ display: 'flex', alignItems: 'center' }}>{label}</p>
            </a>
        </div>

    );
};

ButtonDefault.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    download: null,
};
export default ButtonDefault;
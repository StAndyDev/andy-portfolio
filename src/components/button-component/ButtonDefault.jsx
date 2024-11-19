import React from 'react';
import PropTypes from 'prop-types';

const ButtonDefault = ({label, href, boxIconName}) => {
    return (
        <div className="btn-container" style={{display: 'flex', justifyContent: 'center'}} >
            <a href={href} className="btn btn-default" style={{display: 'flex', flexDirection: 'row', gap: '4px', justifyContent: 'center'}}>
                <i className={boxIconName} style={{fontSize: '24px'}}></i>
                <p style={{display: 'flex', alignItems: 'center'}}>{label}</p>
            </a>
        </div>
    );
};

ButtonDefault.propTypes = {
    label : PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};
export default ButtonDefault;
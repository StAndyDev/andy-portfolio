import React from 'react';
import PropTypes from 'prop-types';

const ButtonDefault = ({label, href}) => {
    return (
        <div className="btn-container">
            <a href="{href}" className="btn btn-default">{label}</a>
        </div>
    );
};

ButtonDefault.propTypes = {
    label : PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};
export default ButtonDefault;
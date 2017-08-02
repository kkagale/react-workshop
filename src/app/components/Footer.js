// functional component

import React from "react";

import PropTypes from "prop-types";

export function Footer (props)  {

    
        return (
            <div>
                <hr/>
                <p>Copyrights@ {props.company} {props.year} </p>
                <button onClick={() => props.handler()} >
                    Contact
                </button>
            </div>
        )
    
}

Footer.defaultProps = {
    year: 2017,
    company: "DB"
}

Footer.propTypes = {
    year: PropTypes.number.isRequired,
    company: PropTypes.string,
    handler: PropTypes.func
}

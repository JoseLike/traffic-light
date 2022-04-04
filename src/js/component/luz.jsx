import React from "react";
import PropTypes from "prop-types";

const Luz = (props) => {
    return( <div className={props.clase}></div>);
};

Luz.propTypes = {
	clase: PropTypes.string,
};

export default Luz;
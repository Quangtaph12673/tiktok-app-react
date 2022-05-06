import PropTypes from "prop-types";
import React from "react";
import "./GlobalStyle.scss";

const GlobalStyles = ({children}: any) => {
	return <React.Fragment>{children}</React.Fragment>;
};

GlobalStyles.propTypes = {
	children: PropTypes.any,
};

export default GlobalStyles;

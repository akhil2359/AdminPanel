import React from "react";
import PropTypes from "prop-types";
import {
  Route as ReactRouterRoute,
  withRouter,
} from "react-router-dom";

const Route = ({ protectedRoute, location, ...restProps }) => {

  return <ReactRouterRoute {...restProps} />;
};

Route.propTypes = {
  protectedRoute: PropTypes.bool,
  location: PropTypes.object.isRequired,
};

Route.defaultProps = {
  protectedRoute: false,
};

export default withRouter(Route);

//Here we’ll be storing all our React components that are not dealing directly with our API or responding to routes

import React from "react";
import { Route } from "react-router-dom";

export default ({ component: C, props: cProps, ...rest }) =>
  <Route {...rest} render={props => <C {...props} {...cProps} />} />;

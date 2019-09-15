import React from "react";
import PropTypes from 'prop-types';
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={App} />
    </Router>
  </Provider>
);
Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
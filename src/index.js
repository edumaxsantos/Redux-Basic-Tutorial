import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import todoApp from "./reducers";
import Root from "./components/Root";

const store = createStore(todoApp);

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

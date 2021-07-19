import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
//import { Values } from "redux-form-website-template";
import store from "./store";
import showResults from "./showResults";
import InitializeFromStateForm from "./InitializeFromStateForm";
import App from "./App";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
  
    <div style={{ padding: 15 }}>
      <h2></h2>
      <InitializeFromStateForm onSubmit={showResults} />
      {/* <Values form="initializeFromState" /> */}
    </div>
  </Provider>,
  rootEl
);

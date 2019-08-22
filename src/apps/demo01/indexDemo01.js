import React from "react";
import ReactDom from 'react-dom';
import { Provider } from "react-redux";
import store from "./store/Demo01";
import App from "./Demo01";
import './indexDemo01.css';
ReactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);
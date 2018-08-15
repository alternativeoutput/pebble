import React from "react";
import ReactDom from 'react-dom';
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./components/App";
import './index.css';
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

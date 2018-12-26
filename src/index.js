import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from "react-dom";
import App from "./components/app.jsx";
import styles from "../css/styles.css";

ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
), document.getElementById('app'));

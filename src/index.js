import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import { ContextProvider } from "./Context"

ReactDOM.render(
  <Router>
    <ContextProvider>
      <App />
    </ContextProvider>
  </Router>,
  document.getElementById('root')
);

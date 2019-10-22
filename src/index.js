import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Registro from './Registro';
import Routing from './Routing';
import * as serviceWorker from './serviceWorker';
import {HashRouter, Route, Switch, BrowserRouter} from 'react-router-dom';
import {Link} from "react-router-dom";


ReactDOM.render(<Registro/>, document.getElementById('root'));

serviceWorker.unregister();


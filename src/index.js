import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import { Registro } from "./componentes/registro/Registro.js";
import Login  from './componentes/login/Login';
import App from './componentes/App/App';
/*import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse';

import 'bootstrap/js/src/collapse';
import 'bootstrap/css/font-awesome.min.css';*/
import * as serviceWorker from './serviceWorker';

import Registro  from './componentes/registro/Registro'; //sirveee
//import HomeUser from './componentes/HomeUser/HomeUser';


ReactDOM.render(<Registro />, document.getElementById('root'));

serviceWorker.unregister();
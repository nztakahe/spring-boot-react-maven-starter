import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import { unregister } from './registerServiceWorker';
import './index.css';

unregister() ;

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();

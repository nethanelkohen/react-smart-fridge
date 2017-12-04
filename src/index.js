import React from 'react';
import ReactDOM from 'react-dom';
import Fridge from './components/Fridge/Fridge.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Fridge />, document.getElementById('root'));
registerServiceWorker();

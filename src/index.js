import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import "tachyons"; // modulo de class de css 



import App from './containers/App';

ReactDOM.render(<App />, document.getElementById('root')
);
serviceWorker.unregister();

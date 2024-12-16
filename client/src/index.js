import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//auth stuff
import {provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './auth/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <App />
    </PersistGate>
    </provider>,
    document.getElementById('root')

);

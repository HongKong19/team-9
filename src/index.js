import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/NavBar/navbar'
import Footer from './components/Footer/footer'
import App from './App';
import * as serviceWorker from './serviceWorker';
import Claim from './views/Claim/claim';


ReactDOM.render(
    <>
        <BrowserRouter>
            <Navbar />
            <div style={{minHeight: window.innerHeight * 0.55}}>
                <App />
            </div>
            <Claim />
            <Footer />
        </BrowserRouter>
    </>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

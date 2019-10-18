import React from 'react';
import './App.css';
import './sass/main.scss';
import { Route, Switch } from 'react-router-dom';
import MainPage from './views/MainPage/MainPage'
import Claim from './views/Claim/claim'
// import Footer from './components/Footer/footer'
import Form from './components/Form/form'
// import Navbar from './components/NavBar/navbar'
import CardPage from './views/CardPage/CardPage'
// import Chatbot from './components/Chatbot/chatbot'

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Form} />
      <Route path="/homePage" component={MainPage} />
      <Route path="/Premium" component={CardPage} />
      <Route path="/Claim" component={Claim} />
    </Switch>
    
  );
}

export default App;

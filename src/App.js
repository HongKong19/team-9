import React from 'react';
import './App.css';
import './sass/main.scss';
import { Route, Switch } from 'react-router-dom';
import MainPage from './views/MainPage/MainPage'
import Claim from './views/Claim/claim'
// import Footer from './components/Footer/footer'
import Form from './components/Form/form'
import Form2 from './components/Form/extensiveForm'
import Login from './views/Login'
import GoalPage from './views/GoalPage'
// import Navbar from './components/NavBar/navbar'
import CardPage from './views/CardPage/CardPage'
import Staff from './components/Staff/staff';
// import Chatbot from './components/Chatbot/chatbot'

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/form" exact component={Form} />
      <Route path="/form2" exact component={Form2} />
      <Route path="/" exact component={Form} />
      <Route path="/Staff" exact component={Staff}/>
      <Route path="/homePage" component={MainPage} />
      <Route path="/Claim" component={Claim} />
      <Route path="/goal" component={GoalPage} />
    </Switch>
    
  );
}

export default App;

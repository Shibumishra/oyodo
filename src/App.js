import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Bebendum from './pages/Bebendum';
import Dapibus from './pages/Dapibus';
import Home from './pages/Home';
import Magna from './pages/Magna';
import Ultricies from './pages/Ultricies';


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/bebendum" exact component={Bebendum} />
        <Route path="/dapibus" exact component={Dapibus} />
        <Route path="/magna" exact component={Magna} />
        <Route path="/ultricies" exact component={Ultricies} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

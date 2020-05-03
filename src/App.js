import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import LatestPhotos from './components/LatestPhotos/LatestPhotos';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className='App'>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <LatestPhotos></LatestPhotos>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;

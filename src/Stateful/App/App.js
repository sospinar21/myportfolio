import React, { Component } from 'react';
import './App.css';
import Main from '../../Stateless/Main/Main';
import Buttons from '../../Stateless/Buttons/Buttons';
import { Route } from 'react-router-dom';
import { eBook, swapi, staticComp } from '../../Stateless/Portfolio/Portfolio'
import Resume from '../../Stateless/Resume/Resume'
import Contact from '../../Stateless/Contact/Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Main} />
        <Route exact path='/portfolio/ebook' component={eBook} />
        <Route exact path='/portfolio/swapi' component={swapi} />
        <Route exact path='/portfolio/static' component={staticComp} />                    
        <Route exact path='/resume' component={Resume} />           
        <Route exact path='/contact' component={Contact}/>
      </div>
    );
  }
}

export default App;

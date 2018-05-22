import React, { Component } from 'react';
import './App.css';
import Main from '../../Stateless/Main/Main';
import Buttons from '../../Stateless/Buttons/Buttons';
import { Route, Switch, Redirect } from 'react-router-dom';
import { eBook, swapi, staticComp } from '../../Stateless/Portfolio/Portfolio'
import Resume from '../../Stateless/Resume/Resume'
import Contact from '../../Stateless/Contact/Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/portfolio/ebook' component={eBook} />
          <Route path='/portfolio/swapi' component={swapi} />
          <Route path='/portfolio/static' component={staticComp} />                    
          <Route path='/resume' component={Resume} />           
          <Route path='/contact' component={Contact}/>
          <Redirect from='*' to='/' />
        </Switch>
      </div>
    );
  }
}

export default App;

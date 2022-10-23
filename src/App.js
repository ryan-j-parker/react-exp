import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Gui from './components/Gui';
import Main from './Main/Main';

function App() {
  return (
    <Switch>
      <Route path="/" component={Gui} />
      <Route path="/portfolio" component={Main} />
    </Switch>
  );
}

export default App;

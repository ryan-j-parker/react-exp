import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Particle from './components/Particle';

import Main from './Main/Main';

function App() {
  return (
    <div className="App">
      {/* <Particle /> */}
      <Switch>
        <Route to="*">
          <Home />
        </Route>
        <Route to="/portfolio">
          <Main />
        </Route>
        <Route to="/about"></Route>
        <Route to="/links"></Route>
      </Switch>
    </div>
  );
}

export default App;

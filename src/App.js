import { Route, Switch } from 'react-router-dom';
import Particles from 'react-tsparticles';
import './App.css';
import Particle from './components/Particle';

import Main from './Main/Main';

function App() {
  return (
    <div className="App">
      <Main />
      <Particle />
      <Switch>
        <Route to="/portfolio"></Route>
        <Route to="/about"></Route>
        <Route to="/links"></Route>
        {/* <Route to="*">{Main}</Route> */}
      </Switch>
    </div>
  );
}

export default App;

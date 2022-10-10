import React from 'react';
import './Main.css';
import { Portfolio } from '../components/Portfolio';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';

function Main() {
  return (
    <>
      <Header />
      <div className="main">
        <Switch>
          <Route to="/portfolio">
            <div className="project-box">
              <h2 className="project-title">projects:</h2>
              <div className="projects-wrap">
                <Portfolio />
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Main;

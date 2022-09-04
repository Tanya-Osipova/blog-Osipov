import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import '../../vendor/fonts/fonts.css';
import Home from '../Home/Home';
import Blog from '../Blog/Blog';
import Publications from '../Publications/Publications';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/publications">
          <Publications />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeView from '../components/HomeView';
import BlogView from '../components/BlogView';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/blog" component={BlogView} />
    </Switch>
  </main>);


export default Main;

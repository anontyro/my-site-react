import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeView from '../components/HomeView';
import BlogView from '../components/BlogView';
import AboutView from '../components/AboutView';
import ResumeView from '../components/ResumeView';
import PortfolioView from '../components/PortfolioView';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/blog" component={BlogView} />
      <Route path="/resume" component={ResumeView} />
      <Route path="/portfolio" component={PortfolioView} />
      <Route path="/about" component={AboutView} />

    </Switch>
  </main>);


export default Main;

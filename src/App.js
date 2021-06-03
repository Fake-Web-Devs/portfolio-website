import React from 'react';
import Navbar from "../src/components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import AllPosts from "../../portfolio-website/src/components/BlogPost/AllPosts";
import OnePost from "../../portfolio-website/src/components/BlogPost/OnePost";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
            <Route component={AllPosts} path="/blog" />
            <Route component={OnePost} path="/:slug" />
        </Switch>
      </Router>
    </>
  );
}

export default App;

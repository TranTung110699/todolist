import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/home";
import JobList from "./components/job-list";
import CreatJob from "./components/creat";
import EditJob from "./components/edit";
import CompleteJob from "./components/complete";

class App extends Component{
  render(){
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/job-list" component={JobList}/>
            <Route path="/job-list/create" component={CreatJob}/>
            <Route path={`/job-list/:id/edit`} component={EditJob}/>
            <Route path={`/job-list/complete`} component={CompleteJob}/>
          </Switch>
        </Router>
    );
  }
}

export default App;

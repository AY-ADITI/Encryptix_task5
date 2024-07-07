
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import JobListingsPage from './components/JobListingsPage';
import JobDetailPage from './components/JobDetailPage';
import EmployerDashboard from './components/EmployerDashboard';
import CandidateDashboard from './components/CandidateDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/jobs" exact component={JobListingsPage} />
          <Route path="/job/:id" component={JobDetailPage} />
          <Route path="/employer-dashboard" component={EmployerDashboard} />
          <Route path="/candidate-dashboard" component={CandidateDashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


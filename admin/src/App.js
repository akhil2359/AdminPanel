import React from "react";
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Login from './pages/Login';

const App = () => {
  return (
    <Router basename="/onpassive">
      <Login />
</Router>
  );
};

export default App;

import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Route from "./components/Route";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router basename="/onpassive">
      <Suspense fallback={<div />}></Suspense>
      <Route path="/" exact component={Login} protectedRoute />
      <Route path="/login" exact component={Login} protectedRoute />
      <Route path="/dashboard" exact component={Dashboard} protectedRoute />
    </Router>
  );
};

export default App;

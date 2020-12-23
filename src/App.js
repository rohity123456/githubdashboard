import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <AuthWrapper>
        <Router>
          <Switch>
            <PrivateRoute path="/" exact>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="*" exact>
              <Error />
            </Route>
          </Switch>
        </Router>
      </AuthWrapper>
    </div>
  );
}

export default App;

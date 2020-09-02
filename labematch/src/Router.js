import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Matching from "./pages/Matching/Matching";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";
import Dialogue from "./pages/Dialogue";
import Matches from "./pages/Matches";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Switch>
        <Route path="/login" exact component={Login} />
      </Switch>
      <Switch>
        <Route path="/signup" exact component={SignUp} />
      </Switch>
      <Switch>
        <Route path="/matching" exact component={Matching} />
      </Switch>
      <Switch>
        <Route path="/search" exact component={Search} />
      </Switch>
      <Switch>
        <Route path="/profile" exact component={Profile} />
      </Switch>
      <Switch>
        <Route path="/messages" exact component={Messages} />
      </Switch>
      <Switch>
        <Route path="/dialogue" exact component={Dialogue} />
      </Switch>
      <Switch>
        <Route path="/matches" exact component={Matches} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

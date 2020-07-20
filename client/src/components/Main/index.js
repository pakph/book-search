import React from "react";
import Saved from "../../pages/Saved";
import Search from "../../pages/Search";
import { Switch, Route } from "react-router-dom";

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Search}></Route>
      <Route exact path="/saved" component={Saved}></Route>
    </Switch>
  );
}

export default Main;

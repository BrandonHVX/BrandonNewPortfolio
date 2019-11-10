import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./main";
import JobsNow from "./pages/JobsNow";
import Nyx from "./pages/Nyx";

export default props => (
  <div>
    {" "}
    <div className="content">
      {" "}
      {/* <NavBar toggle={props.toggle} /> */}
      <Switch>
        <Route exact path="/" component={() => <Main />} />
        <Route exact path="/jobsnow" component={() => <JobsNow />} />
        <Route exact path="/nyxnews" component={() => <Nyx />} />

        {/* projects pages */}
      </Switch>
    </div>
  </div>
);

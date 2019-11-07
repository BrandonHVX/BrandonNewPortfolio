import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./main";
import JobsNow from "./JobsNow";

export default props => (
  <div>
    {" "}
    <div className="content">
      {" "}
      {/* <NavBar toggle={props.toggle} /> */}
      <Switch>
        <Route exact path="/" component={() => <Main />} />
        <Route exact path="/jobsnow" component={() => <JobsNow />} />
       


        {/* projects pages */}
       
      </Switch>
    </div>
  </div>
);
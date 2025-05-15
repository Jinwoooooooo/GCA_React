import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { HelloComponent } from "./HelloComponent";
import { WelcomeComponent } from "./WelcomeComponent";
import { GreetingComponent } from "./GreetingComponent";

export const RouterBasicComponent = () => {
  return (
    <div className="RouterBasicComponent">
      <h4>RouterBasicComponent</h4>
      <p>
        <Link to={"/hello"}>hello</Link>&nbsp;
        <Link to={"/welcome"}>welcome</Link>&nbsp;
        <Link to={"/greeting"}>greeting</Link>&nbsp;
      </p>

      <Routes>
        <Route path="/hello" element={<HelloComponent />}></Route>
        <Route path="/welcome" element={<WelcomeComponent />}></Route>
        <Route path="/greeting" element={<GreetingComponent />}></Route>
      </Routes>
    </div>
  );
};

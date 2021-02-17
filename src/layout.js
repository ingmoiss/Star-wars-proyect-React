import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./views/home";
import { Navbar } from "./views/navbar";

const Layout = () => {
    return <Router>
        <Navbar />
        <Switch>
            <Route path="/"><Home /></Route>
            {/* <Route path="/planets"><Planets /></Route> */}
        </Switch>
    </Router>
}
export default Layout;
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"

function routes() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/login" exact>
                        <Login />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default routes

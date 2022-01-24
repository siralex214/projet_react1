import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import News from "./pages/News";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/news" component={News} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>

    );
};

export default App;
import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import PageComponentNotFound from "./pages/404";
import Work from "./pages/Work";

class App extends React.Component {
    componentDidMount() {
        document.body.classList.add("bg-gray-800");
    }

    render() {
        return (
            <>
                <Switch>
                    <Route exact path={`/`} component={Home} />
                    <Route exact path={`/contact`} component={Contact} />
                    <Route exact path={`/about`} component={About} />
                    <Route exact path={`/work`} component={Work} />

                    <Route path={`*`} component={PageComponentNotFound}/>
                </Switch>
            </>
        );
    }
}

export default App;

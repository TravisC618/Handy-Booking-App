import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Main from '../components/home/Main';
import FindCleaners from '../FindCleaners';
import Details from '../Details';
import BrowseTasks from '../BrowseTasks';

const Routes = () => {
    return (
        <Router>
            <Navigation />
                <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/find-cleaners" component={FindCleaners} />
                <Route path="/details" component={Details} />
                <Route path="/tasks" component={BrowseTasks} />
                </Switch>
        </Router>
    )
}

export default Routes;
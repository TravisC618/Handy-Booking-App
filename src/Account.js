import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Main from '../components/home/Main';
import FindCleaners from '../FindCleaners';

const Account = props => {
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="row justify-content-center">
                    <div className="col-7">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <Sidebar />
                    </div>
                    <div className="col-8">
                        <Info />
                        <Reviews />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Account;



const Routes = () => {
    return (
        <Router>
            <Navigation />
                <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/find-cleaners" component={FindCleaners} />
                <Route path="/details" component={Details} />
                <Route path="/tasks" component={BrowseTasks} />
                <Route path="/account/dashboard" component={Account} />
                </Switch>
        </Router>
    )
}

export default Routes;
import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import AddExpensedPage from './../components/AddExpensedPage';
import EditExpensedPage from './../components/EditExpensedPage';
import HelpPage from './../components/HelpPage';
import NotFoundPage from './../components/NotFoundPage';
import Header from './../components/Header';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                    <Route path="/create" component={AddExpensedPage}/>
                    <Route path="/edit/:id" component={EditExpensedPage}/>
                    <Route path="/help" component={HelpPage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter;
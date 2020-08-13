import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import PortfolioDashboardPage from '../components/PortfolioDashboardPage';
import PortfolioPage from '../components/PortfolioPage';
import PortfolioItemPage from '../components/PortfolioItemPage';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={PortfolioDashboardPage} exact={true}/>
                <Route path="/portfolio" component={PortfolioPage} exact={true}/>
                <Route path="/portfolio/:id" component={PortfolioItemPage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;

import React,{Fragment} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroeScreen } from '../components/heroes/HeroeScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <Fragment>
            <Navbar />
            <div className="container mt-5">
                <Switch>
                    <Route exact path="/dc" component={ DcScreen } />
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/hero/:heroeId" component={HeroeScreen} />
                    <Route  exact path="/search" component={SearchScreen}  />
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </Fragment>
    )
}

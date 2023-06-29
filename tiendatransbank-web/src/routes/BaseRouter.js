import React from 'react'
import { Navbar } from '../components/Navbar'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { HomeContainer } from '../containers/HomeContainer';
import { AgregarProductoContainer } from '../containers/AgregarProductoContainer';
export const BaseRouter = () => {
    return (
        <Router>
            <div>
                <Navbar></Navbar>
                <Switch>
    
                    <Route path="/producto/agregar" component={AgregarProductoContainer}>
                    </Route>
                    <Route path="/productos" component={HomeContainer}>
                    </Route>
                    <Route path="/">
                        <HomeContainer />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

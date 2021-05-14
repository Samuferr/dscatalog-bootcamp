import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Admin from './pages/Admin'
import Navbar from './core/assets/components/Navbar'

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path='/'>
               <Home /> 
            </Route>
            <Route path='/'>
               <Catalog /> 
            </Route>
            <Route path='/'>
               <Admin /> 
            </Route>
        </Switch>
    </BrowserRouter>
)
export default Routes;
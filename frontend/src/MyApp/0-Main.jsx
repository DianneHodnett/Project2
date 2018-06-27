import React from 'react';
import { ApolloProvider } from "react-apollo";
import { HashRouter, Route, Link } from 'react-router-dom';
import './Style/style.css';
import { client } from './PrismaEndPoint/EndPoint';

import ReadAll from './1-ReadAll'
import Apartments from './2-AddApartment'
import Update from './3-UpdateApt'
import Delete from './4-DeleteApt'


export default class extends React.Component{
    render(){

        return(
            <ApolloProvider client={client}>
                <HashRouter>
                    <div className="Header">

                        <div className="menu1">
                            <Link className="menuButton" to="/">All Apartments</Link>
                            <Link className="menuButton" to="/2">Add Apartments</Link>
                            <Link className="menuButton" to="/3">Update Apartment</Link>
                            <Link className="menuButton" to="/4">Delete Apartment</Link>
                        </div>

                        <hr/>

                        <Route exact path="/" component={ReadAll}/>
                        <Route exact path="/2" component={Apartments}/>
                        <Route exact path="/3" component={Update}/>
                        <Route exact path="/4" component={Delete}/>

                        <br/>
                        <hr/>
                        <div>By: Dianne Hodnett</div>

                    </div>
                </HashRouter>
            </ApolloProvider>
        )
    }
}

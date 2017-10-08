import React from 'react'
import { Router,Route,IndexRoute,hashHistory,IndexRedirect } from 'react-router'

import App from '../containers'
import Home from '../containers/Home'
import Choice from '../containers/Choice'
import Search from '../containers/Search'
import BookShelf from '../containers/BookShelf'
import Classify from '../containers/Classify'
import User from '../containers/User'
import Login from '../containers/Login'
import Register from '../containers/Register'
import Setting from '../containers/Setting'
import UpdatePassword from '../containers/UpdatePassword'
import Detail from '../containers/Detail'
import Essay from '../containers/Essay'
import Catalog from '../containers/Catalog'
import ClassTab from '../containers/ClassTab'
import WriteCom from '../containers/WriteCom'

class RouteMap extends React.Component {
    render() {
        return (
            <Router history={hashHistory} >
                <Route path="/" component={App} >
                    <IndexRedirect to="/home" />
                    <Route path="/home" component={Home}>
                        <IndexRoute component={Choice} />
                        <Route path="/shelf" component={BookShelf} />
                        <Route path="/classify" component={Classify} />
                        <Route path="/user" component={User} />
                    </Route>
                    <Route path="/search" component={Search} />
                    <Route path="/login" component={Login} />
                    <Route path="/reg" component={Register} />
                    <Route path="/set" component={Setting} />
                    <Route path="/upassword" component={UpdatePassword} />
                    <Route path="/detail/:id" component={Detail} />
                    <Route path="/essay/:id/:chapter" component={Essay} />
                    <Route path="/catalog/:id/:chapter" component={Catalog} />
                    <Route path="/classtab/:title" component={ClassTab} />
                    <Route path="/writecom/:id" component={WriteCom} />
                </Route>
            </Router>
        )
    }
}

export default RouteMap

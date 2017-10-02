import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import RouteMap from './router/RouteMap'
import store from './store'

//--------------------------------------------------------


ReactDOM.render(
    <Provider store={store}>
        <RouteMap />
    </Provider>,
    document.getElementById('root')
)
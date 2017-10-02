// import { createStore }  from 'redux'
import { combineReducers } from 'redux'
import userinfo from './userinfo.js'
import mainnav from './mainnav.js'
import booksinfo from './booksinfo.js'

// var reducer = (state={navIndex:1}, action) => {
//     switch (action.type ) {
//         case 'UPDATECURNAV':
//             return action.navIndex;
//         case 'ADDUSERINFO':
//             return action.userinfo
//         default: return state;
//     }
// }
// var store = createStore(reducer);

export default combineReducers ({
    userinfo,
    mainnav,
    booksinfo
})

export default  (state={}, action) => {
    switch (action.type ) {
        case 'ADDUSERINFO':
            return action.userinfo
        case 'DELUSERINFO':
            return action.userinfo
        default: return state;
    }
}

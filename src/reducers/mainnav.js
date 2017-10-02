export default (state={navIndex:1}, action) => {
    switch (action.type ) {
        case 'UPDATECURNAV':
            return action.navIndex;
        default: return state;
    }
}
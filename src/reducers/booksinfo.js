export default  (state={}, action) => {
    switch (action.type ) {
        case 'ADDBOOKSINFO':
            return action.booksinfo
        default: return state;
    }
}

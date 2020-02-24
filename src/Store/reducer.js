const initialState= {
    counter: 0,
}

const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1
        };
    } else if (action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1
        };
    } else if (action.type === 'ADDFIVE') {
        return {
            counter: state.counter + action.val
        };
    } else if (action.type === 'LESSFIVE') {
        return {
            counter: state.counter - action.val
        };
    }
    
    return state;
};

export default reducer;
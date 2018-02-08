const defaultState = {
    message: 'Hello World'
};
export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
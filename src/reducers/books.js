const initialState = {
    isReady: false,
    items: null,
    filterBy: 'all'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BOOKS':
            return {
                ...state,
                items: action.payload,
                isReady: true
            };
        case 'SET_IS_READY':
            return {
                ...state,
                isReady: true
            };
        case 'SET_FILTER':
            return {
                ...state,
                filterBy: action.payload,
            };
        case 'ADD_BOOK':
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        default:
            return state;
    }
}

const initialState = {
    items: JSON.parse(localStorage.getItem('cart.items'))
};

const addToCart = (state, action) => {
    //TODO: move out of reducer. Maybe to subscribe method
    localStorage.setItem('cart.items', JSON.stringify([...state.items, action.payload]))
    return {
        ...state,
        items: [...state.items, action.payload]
    };
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return addToCart(state, action);
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(o => o.id !== action.payload)
            };
        case 'UPDATE_CART_ITEM':
            return {
                ...state,
                items: state.items.filter(o => o.id !== action.payload)
            };
        default:
            return state;
    }
}

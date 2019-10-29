export const addToCart = books => ({
    type: 'ADD_TO_CART',
    payload: books
});

export const removeFromCart = id => ({
    type: 'REMOVE_FROM_CART',
    payload: id,
});
const initialState = {
    items: [
        {
            "id": 17,
            "title": "Метро 2035",
            "author": "Дмитрий Глуховский",
            "image": "https://cv9.litres.ru/sbc/13698392_cover_185-elektronnaya-kniga-dmitriy-gluhovskiy-metro-2035.jpg",
            "price": 837,
            "rating": 4
        },
        {
            "id": 17,
            "title": "Метро 2035",
            "author": "Дмитрий Глуховский",
            "image": "https://cv9.litres.ru/sbc/13698392_cover_185-elektronnaya-kniga-dmitriy-gluhovskiy-metro-2035.jpg",
            "price": 837,
            "rating": 4
        },
        {
            "id": 17,
            "title": "Метро 2035",
            "author": "Дмитрий Глуховский",
            "image": "https://cv9.litres.ru/sbc/13698392_cover_185-elektronnaya-kniga-dmitriy-gluhovskiy-metro-2035.jpg",
            "price": 837,
            "rating": 4
        }
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(o => o.id !== action.payload)
            };
        default:
            return state;
    }
}

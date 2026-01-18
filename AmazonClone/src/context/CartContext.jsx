import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    user: null, // For future user auth
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            let newCart;
            if (existingItem) {
                newCart = state.cart.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                newCart = [...state.cart, { ...action.payload, quantity: 1 }];
            }
            localStorage.setItem('cart', JSON.stringify(newCart));
            return { ...state, cart: newCart };
        }
        case 'REMOVE_FROM_CART': {
            const newCart = state.cart.filter(item => item.id !== action.payload.id);
            localStorage.setItem('cart', JSON.stringify(newCart));
            return { ...state, cart: newCart };
        }
        case 'UPDATE_QUANTITY': {
            const newCart = state.cart.map(item =>
                item.id === action.payload.id
                    ? { ...item, quantity: Math.max(1, action.payload.quantity) }
                    : item
            );
            localStorage.setItem('cart', JSON.stringify(newCart));
            return { ...state, cart: newCart };
        }
        case 'CLEAR_CART':
            localStorage.removeItem('cart');
            return { ...state, cart: [] };
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

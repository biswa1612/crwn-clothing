import CartItem from '../../components/cart-item/cart-item.component';
import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id != action.payload.id)   //it will keep the elements those whoose id wont match witch the one we want to remove and will return us a new array
            };
        default:
            return state;
    }
};

export default cartReducer;
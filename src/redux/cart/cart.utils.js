export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(             //it will find whether the cart item exists or not 
        cartItem => cartItem.id == cartItemToAdd.id
    );
    if(existingCartItem){            //if it exists
        return cartItems.map(cartItem =>       //will return new array
            cartItem.id == cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}] //if it does not exist
};
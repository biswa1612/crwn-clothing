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

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id == cartItemToRemove.id
    )

    if(existingCartItem.quantity == 1) {
        return cartItems.filter(cartItem => cartItem.id != cartItemToRemove.id)
    }

    return cartItems.map(
        cartItem =>
        cartItem.id == cartItemToRemove.id 
        ? {...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem

    
    );
};
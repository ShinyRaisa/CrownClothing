export const addItemToCart = (cartItems, cartItemToAdd) =>{
    const  existingCartItem = cartItems.find(cartItem =>
    cartItem.id === cartItemToAdd.id
    );

    if(existingCartItem){//new version of state needs to be returned so comopnenets rerender
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ?
                {...cartItem, quantity: cartItem.quantity +1 }
                : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1} ]
}
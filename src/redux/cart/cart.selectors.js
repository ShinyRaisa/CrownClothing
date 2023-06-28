import { createSelector } from "reselect";
//input selector
//gets whole state returns a chunk
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
   [ selectCart ],// a collection of input selectors
    (cart)=>cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>  cartItems.reduce(
        (accumulatedQuantity, cartItem)=>
            accumulatedQuantity + cartItem.quantity,0)
)
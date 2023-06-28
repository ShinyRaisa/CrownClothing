import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import cartTypes from "../../redux/cart/cart.types";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropdown =({cartItems})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem =>
                    <CartItem key={cartItem.id} item={cartItem}/>
                )
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)
// const mapStateTopProps = ({cart: { cartItems }}) =>({
//     cartItems
// })//replace by selectors
const mapStateTopProps = (state) =>({
    cartItems: selectCartItems(state)
})
 export default connect(mapStateTopProps)(CartDropdown);
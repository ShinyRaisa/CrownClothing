// import React from "react";
// import './header.style.scss';
// import { Link } from 'react-router-dom'
// import { ReactComponent as Logo } from '../../assets/crown.svg';
// import { auth } from '../../firebase/firebase.utils';
// import { connect } from "react-redux";
//
// const Header = ({ currentUser })=>(
//     <div className='header'>
//         <Link className='logo-container ' to='./'>
//             <Logo className='logo' /></Link>
//             <div className='options'>
//                 <Link className='option' to='/shop'>Shop</Link>
//                 <Link className='option' to='/shop'>Contact</Link>
//                 {currentUser ?
//                     <div className='option' onClick={()=> auth.signOut()}>Sign Out</div> :
//                     <Link className='option' to='/signin'>Sign In</Link>
//                 }
//             </div>
//     </div>
// )
//
// const mapStateToProps = state => ({//state is rootReducer
//     currentUser : state.user.currentUser
// })
// export default connect(mapStateToProps)(Header) ;

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.style.scss';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
            ) : (
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            )}
            <CartIcon/>
        </div>
        {hidden ? null : <CartDropdown/>}
    </div>
);

                    //state
const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    //currentUser: state.user.currentUser
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);
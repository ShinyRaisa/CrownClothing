import React from "react";
import './custom-button.style.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherprops}) => (
    <button className={` ${inverted ? 'inverted' : ''}
    ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
            {...otherprops}>
        {children}
    </button>
)
// const CustomButton2 = ({children, ...otherprops}) => {
//     const props = {className: 'custom-button', ...otherprops}
//     return (
//         <button {...props}>
//             {children}
//         </button>
//     )
// }
export default CustomButton;
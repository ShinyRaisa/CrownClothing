import React from "react";
import './custom-button.style.scss';

const CustomButton = ({children,isGoogleSignIn, ...otherprops}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
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
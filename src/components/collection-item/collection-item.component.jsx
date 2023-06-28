import React from "react";
import './collection-item.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import { connect} from "react-redux";
import { addItem} from "../../redux/cart/cart.action";
import {mapDispatchToPropsFactory} from "react-redux/es/connect/mapDispatchToProps";

const CollectionItem = ({item, addItemProp})=> {
    const {  name, price, imageUrl} = item;

    return (
        <div className='collection-item'>
            <div className='image'
                 style={{backgroundImage: `url(${imageUrl})`}}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={()=> addItemProp(item)} inverted>ADD TO CART</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    addItemProp: item => dispatch(addItem(item))
    //dispatch addItem action creator when addItempp is called
    //additemProp is the prop that gets passed in to this component
})
export default connect(null,
    mapDispatchToProps)(CollectionItem);
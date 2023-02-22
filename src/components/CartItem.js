import React, { useContext, useState } from 'react';
import { Context } from '../Context';
import PropTypes from "prop-types";

const CartItem = ({item}) => {

    const [hovered, setHovered] = useState(false)
    const {removeFromCart} = useContext(Context)
    
    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    
    return (
        <div className="cart-item">
            <i 
                className={iconClassName} 
                onClick={() => removeFromCart(item.id)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
            </i>
            <img src={item.url} width="180px" alt=""/>
            <p>Rs. 99</p>
        </div>
  )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem;
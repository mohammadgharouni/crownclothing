import React from 'react'
import "./cart-item.styles.scss"
const CartItem = (props) => {
    return (

        <div className="cart-item">
            <img src={props.item.imageUrl} alt="item"/>
            <div className="item-details">
                <span>{props.item.name}</span>
                <span>{props.item.quantity}
                    x ${props.item.price}</span>

            </div>

        </div>

    )

}

export default CartItem
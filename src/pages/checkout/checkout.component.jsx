import React from 'react'
import "./checkout.styles.scss"
import { connect } from 'react-redux'
import AnimatedNumber from "animated-number-react"
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
const Checkout=(props)=>{

    return(
        <div className="checkout-page">
            <div className="checkout-header">

                <div className="header-block ">
                    <span>Product</span>


                </div>
                

                <div className="header-block ">
                    <span>Description</span>


                </div>
                
                <div className="header-block ">
                    <span>Quantity</span>


                </div>
                
                <div className="header-block ">
                    <span> Price</span>


                </div>
                
                <div className="header-block ">
                    <span>Remove</span>


                </div>


            </div>

            {
                props.cartItems.map(cartItem=><CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
            }
                    <div className="total">
                    TOTAL: $
                <AnimatedNumber formatValue={(value)=>value.toFixed(0)} value={props.total} ></AnimatedNumber>
                    </div>
        </div>
    )


}

const mapStateToProps = createStructuredSelector({

cartItems: selectCartItems,
total: selectCartTotal

});


export default connect(mapStateToProps, null)(Checkout)

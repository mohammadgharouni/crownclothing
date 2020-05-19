import "./cart-dropdown.styles.scss"
import React from 'react'
import CustomButton from "../CustomButton/CustomButton.component"
import CartItem from "../cart-item/cart-item.component"
import { connect } from "react-redux"
import { selectCartItems } from "../../redux/cart/cart.selectors"
import { withRouter } from "react-router-dom"
import { toggleCartHidden } from "../../redux/cart/cart.actions"


const CartDropDown=({cartItems,history,dispatch})=>(

    <div className="cart-dropdown">
        <div className="cart-items ">
            {}

        {cartItems.length ?(

            
            
            cartItems.map(cartitem=>(
                
                <CartItem key={cartitem.id}  item={cartitem}/>
                ))
        ):( <span className="empty-card"> Your cart is empty</span>
                
                )}
        </div>
        
        <CustomButton onClick={()=>{
            history.push("/checkout")
            dispatch(toggleCartHidden())
        }}>GO TO CHECKOUT</CustomButton>



    </div>
)

const mapStateToProps = (state, ownProps) => {
    return {
        cartItems: selectCartItems(state)
    }
}

export default withRouter( connect(mapStateToProps,null)(CartDropDown))
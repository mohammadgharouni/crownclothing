import React from 'react'
import {ReactComponent as CartLogo} from "../../assets/shopping-bag.svg"
import "./cart-icon.styles.scss"
import {connect} from 'react-redux'
import {selectCartItemsCount} from "../../redux/cart/cart.selectors"
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { createStructuredSelector } from 'reselect'
const CartIcon = (props) => {
    return (

        <div className='cart-icon' onClick={props.toggleCartHidden}>

            <CartLogo className="shopping-icon"/>
            <span className="item-count">{props.itemCount}</span>

        </div>

    )

}
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
  });

const mapDispatchToProps = dispatch=>({

    toggleCartHidden:()=>dispatch(toggleCartHidden())
})



export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
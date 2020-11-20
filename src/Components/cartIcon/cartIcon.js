import React from "react"
import "./cartIcon.scss"
import { connect } from "react-redux"
import actions from "../../redux/actions"
import { ReactComponent as CartIcon } from "../../assets/cart.svg"

const cartIcon = ({ toggleCartHidden, cartItemCount }) => (
    <div className="cartIcon" onClick={toggleCartHidden} >
        <CartIcon className="shoppingIcon" />
        <span className="itemCount">{ cartItemCount }</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(actions.toggleCartHidden())
})

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItemCount: cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0
    )
})

export default connect(mapStateToProps, mapDispatchToProps)(cartIcon)
import React from "react"
import "./Checkout.scss"
import { connect } from "react-redux"
import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem"

const Checkout = ({cartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} /> )
        }
        <div className="total">
            <span>Total: ${total}</span>
        </div>
    </div>
)

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems,
    total: cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0
    )
})

export default connect(mapStateToProps)(Checkout)
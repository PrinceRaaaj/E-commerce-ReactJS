import React from "react"
import "./CheckoutItem.scss"
import { connect } from "react-redux"
import actions from "../../redux/actions"

const CheckoutItem = ({ cartItem, deleteItemFromCart, removeItem, addItem }) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={cartItem.imageUrl} alt="text" />
        </div>
        <span className="name">{cartItem.name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span className="value">{cartItem.quantity}</span>
            <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
        </span>
        <span className="price">{cartItem.price}</span>
        <div className="remove-button" onClick={() => deleteItemFromCart(cartItem.id)}>&#10005;</div>
    </div>
)

const mapDispatchToProps = dispatch => ({
    deleteItemFromCart: ItemId => dispatch(actions.deleteItemFromCart(ItemId)),
    addItem: item => dispatch(actions.addItem(item)),
    removeItem: item => dispatch(actions.removeItem(item))
})


export default connect(null, mapDispatchToProps)(CheckoutItem)
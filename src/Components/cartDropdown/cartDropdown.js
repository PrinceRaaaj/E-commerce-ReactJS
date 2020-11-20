import React from "react"
import "./cartDropdown.scss"
import CustomButton from "../customButton/CustomButton"
import CartItem from "../cartItem/CartItem"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import actions from "../../redux/actions"

const cartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className="cartDropdown">
            <div className="cartItems" >
                {
                    cartItems.length 
                    ? cartItems.map(item => <CartItem key={item.id} item={item} />)
                    : <span className="emptyMessage">Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push("/checkout")
                dispatch(actions.toggleCartHidden())
            }}>CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems    
})

export default withRouter(connect(mapStateToProps)(cartDropdown))
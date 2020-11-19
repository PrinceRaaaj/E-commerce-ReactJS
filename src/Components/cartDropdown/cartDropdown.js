import React from "react"
import "./cartDropdown.scss"
import CustomButton from "../customButton/CustomButton"
import CartItem from "../cartItem/CartItem"
import { connect } from "react-redux"

const cartDropdown = ({ cartItems }) => {
    return (
        <div className="cartDropdown">
            <div className="cartItems" >
                {
                    cartItems.map(item => <CartItem key={item.id} item={item} />)
                }
            </div>
            <CustomButton>CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems    
})

export default connect(mapStateToProps)(cartDropdown)
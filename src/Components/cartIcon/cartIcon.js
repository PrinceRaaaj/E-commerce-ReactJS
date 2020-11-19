import React from "react"
import "./cartIcon.scss"
import { connect } from "react-redux"
import actions from "../../redux/actions"
import { ReactComponent as CartIcon } from "../../assets/cart.svg"

const cartIcon = ({ toggleCartHidden }) => (
    <div className="cartIcon" onClick={toggleCartHidden} >
        <CartIcon className="shoppingIcon" />
        <span className="itemCount"> 0 </span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(actions.toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(cartIcon)
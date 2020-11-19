import React from "react"
import "./CartItem.scss"

const CartItem = ({item}) => (
    <div className="cartItem">
            <img src={item.imageUrl} alt="item" />
            <div className="itemDetail">
                <span className="name">{item.name}</span>
                <span className="price">{item.quantity} X ${item.price}</span>
            </div>
    </div>
)

export default CartItem
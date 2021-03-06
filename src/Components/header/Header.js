import React from "react"
import "./Header.scss"
import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../assets/crown.svg"
import { auth } from "../../firebase/firebaseUtils"
import { connect } from "react-redux"
import CartIcon from "../cartIcon/cartIcon"
import CartDropdown from "../cartDropdown/cartDropdown"

function Header({ currentUser, hidden }){

    return(
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    SHOP
                </Link>
                <Link to="/shop" className="option">
                    CONTACT
                </Link>
                {
                    currentUser 
                    ?
                    <div className="option" onClick={() => auth.signOut()} >
                        SIGN OUT
                    </div>
                    :
                    <Link to="/signin" className="option">
                    SIGN IN
                    </Link>
                }
                <CartIcon />
            </div>
            {
                hidden && <CartDropdown />
            }
            
        </div>
    )
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header)
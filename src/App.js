import React from "react"
import "./App.css"
import Homepage from "./pages/Homepage/Homepage"
import Shop from "./pages/Shop/Shop"
import {Switch, Route, Redirect} from "react-router-dom"
import Header from "./Components/header/Header"
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp"
import { auth, createUserProfileDocument } from "./firebase/firebaseUtils"
import actions from "./redux/actions"
import { connect } from "react-redux"
import Checkout from "./pages/Checkout/Checkout"

class App extends React.Component{

    unsubscribeFromAuth = null;

    componentDidMount(){
        const { setCurrentUser } = this.props
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth)
                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                })
            } else {
                setCurrentUser(userAuth)
            }
        })  
    }

    componentWillUnmount(){
        this.unsubscribeFromAuth()
    }
    
    HatPage = () => <div><h1>Hats Page</h1></div>

    render(){
        return <div className="app">
        <Header />
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop/:productName" component={this.HatPage} />
            <Route path="/shop" component={Shop} />
            <Route exact path="/signin" render={() => this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp /> } />
            <Route path="/checkout" component={Checkout} />
        </Switch>
    </div>
    }
    
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(actions.setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
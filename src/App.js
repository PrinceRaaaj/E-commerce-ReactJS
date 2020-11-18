import React from "react"
import "./App.css"
import Homepage from "./pages/Homepage/Homepage"
import Shop from "./pages/Shop/Shop"
import {Switch, Route} from "react-router-dom"
import Header from "./Components/header/Header"
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp"
import { auth, createUserProfileDocument } from "./firebase/firebaseUtils"


class App extends React.Component{

    constructor(){
        super()

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount(){
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth)
                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    })
                })
            } else {
                this.setState({ currentUser: userAuth })
            }
        })  
    }

    componentWillUnmount(){
        this.unsubscribeFromAuth()
    }
    
    HatPage = () => <div><h1>Hats Page</h1></div>

    render(){
        return <div className="app">
        <Header currentUser={this.state.currentUser}  />
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shop/:productName" component={this.HatPage} />
            <Route path="/shop" component={Shop} />
            <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
    </div>
    }
    
}

export default App
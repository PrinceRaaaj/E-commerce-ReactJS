import React from "react"
import "./SignIn.scss"
import FormInput from "../FormInput/FormInput"
import CustomButton from "../customButton/CustomButton"
import { signInWithGoogle, auth } from "../../firebase/firebaseUtils"

class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async event =>{
        const { email, password} = this.state
        event.preventDefault()
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email:"", password:""})
        } catch(err){
            console.err(err)
        }
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit} >
                    <FormInput 
                        name="email" 
                        type="email" 
                        label="Email" 
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        required 
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        label="password" 
                        handleChange={this.handleChange} 
                        value={this.state.password} 
                        required 
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>  
                        <CustomButton onClick={signInWithGoogle} google >Sign In with Google</CustomButton>    
                    </div> 
                </form>
            </div>
        )
    }
}

export default SignIn
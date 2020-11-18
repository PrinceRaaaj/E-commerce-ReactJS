import React from "react"
import "./SignUp.scss"
import FormInput from "../FormInput/FormInput"
import CustomButton from "../customButton/CustomButton"
import { auth, createUserProfileDocument } from "../../firebase/firebaseUtils"

class SignUp extends React.Component{
    constructor(){
        super()

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name] : value })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const {displayName, email, password, confirmPassword} = this.state
        if(password !== confirmPassword){
            alert("Passwords aren't same")
            return
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword( email, password )
            createUserProfileDocument(user, {displayName})
            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
            
        } catch(err) {
            console.error(err)
        }
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput 
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput 
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput 
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Pasword"
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp
import React from "react"
import "./SignInAndSignUp.scss"
import SignIn from "../../Components/SignIn/SignIn"
import SignUp from "../../Components/signUp/SignUp"

export default function SignInAndSignUp(){
    return <div className="signInAndSignUp">
        <SignIn />
        <SignUp />
    </div>
}
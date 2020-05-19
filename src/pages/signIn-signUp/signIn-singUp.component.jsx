import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from "../../components/sign-up/sign-up.component"
import "./signIn-signUp.styles.scss"
const SignInsignUp = () => {

    return (

        <div className="sisu">

            <SignIn/>
            <SignUp/>

        </div>

    )

}

export default SignInsignUp;
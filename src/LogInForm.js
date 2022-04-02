import React, {useState} from 'react';
import {logInUser} from "./firebase";

const SignUpForm = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        logInUser(email, password)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
            />
            <input
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
            />
            <button onClick={handleSubmit}>Log in</button>
        </form>
    );
};

export default SignUpForm;
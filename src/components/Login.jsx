// LoginComponent.jsx
import React, { useState } from "react";
import { auth } from "../Firebase/frebase-config";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const LoginComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // console.log(auth?.currentUser?.email);

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter your email"
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <input
                type="password"
                placeholder="Enter your name"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <button onClick={signIn}>Submit</button>
        </div>
    );
};

export default LoginComponent;

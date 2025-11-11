import { createContext, useEffect, useState } from "react";
import React from 'react';
import app from "./firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext()
const auth = getAuth(app)



const AuthProvider = ({children}) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)

    const SignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const SignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const LogOut = () => {
       return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setLoading(false)
            setUser(currentUser)
        })
        return ()=> {
            unsubscribe()
        }
    }, [])





    const authInfo = {
        SignUp,
        user,
        setUser,
        SignIn,
        LogOut,
        loading,
        setLoading

    }

    return (
        <AuthContext value={authInfo}> {children}</AuthContext>
    );
};

export default AuthProvider;
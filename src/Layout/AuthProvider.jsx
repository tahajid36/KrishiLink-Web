import { createContext, useEffect, useState } from "react";
import React from 'react';
import app from "./firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext()
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()



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
    const GoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const updateuser = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
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
        setLoading,
        GoogleLogin,
        updateuser

    }

    return (
        <AuthContext value={authInfo}> {children}</AuthContext>
    );
};

export default AuthProvider;
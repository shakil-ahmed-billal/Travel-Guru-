import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from './../firebase/firebase.config';


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

  const [loading , setLoading] = useState(true)
  const [user , setUser] = useState(null)

  // authentication state section
  const provider = new GoogleAuthProvider()
  const auth = getAuth(app);


  const createNewAccount = (email , password) =>{
    return createUserWithEmailAndPassword(auth , email , password);
  }

  const loginGoogle = () =>{
    return signInWithPopup(auth , provider)
  }

  const signInUser = (email , password) =>{
    return signInWithEmailAndPassword(auth , email , password)
  }
  const logOut = () =>{
    signOut(auth)
  }
  
  console.log(user);
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth , (currentUser)=>{
      setUser(currentUser)
      setLoading(false)
    })
    return ()=>{
      unSubscribe()
    }
  },[])

  const authInfo = {
    createNewAccount,
    loginGoogle ,
    signInUser,
    logOut,
    loading ,
    user,
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {/* authContext render all components */}
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
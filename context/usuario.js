import React,{createContext, useState, useEffect} from 'react';
import firebase from 'firebase';
import 'firebase/auth';

export const UsuarioContext = createContext({});

export default function UsuarioProvider({children}){

    const [user, setUser] = useState(null);

  const listenAuth = (userState) => {
    setUser(userState)
  }



    const SignUp = (email, password) =>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
         firebase.auth().onAuthStateChanged(listenAuth)
        .then( resp=>{
            console.warn(resp)
        })
        .catch(err => {
            console.warn(err)
        })
    }

    const SignIn = (email, password) =>{
        firebase.auth().signInWithEmailAndPassword(email,password)
        firebase.auth().onAuthStateChanged(listenAuth)
        .then( resp=>{
            console.warn(resp)
        })
        .catch(err => {
            console.warn(err)
        })
    }

    const SignOut = (email) =>{
        firebase.auth().signOut()
        firebase.auth().onAuthStateChanged(listenAuth)
        .then( resp=>{
            console.warn('Usuário deslogado com sucesso')
        })
        .catch(err => {
            console.warn(err)
        })
    }

    return(
        <UsuarioContext.Provider value = {{user, SignUp, SignIn, SignOut}}>
            {children}
        </UsuarioContext.Provider>
    )
}


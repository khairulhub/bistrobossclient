import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import { DiPhotoshop } from "react-icons/di";

import { app } from "../Firebase/Firebase.config";




export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo
        });
      };


    useEffect( ()=>{
       const unSubscribe =  onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        }
     );
        return () => {
            unSubscribe();
        }
    },[])



    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
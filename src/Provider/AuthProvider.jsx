import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
        setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const signInWithGitHub = () => {
        return signInWithPopup(auth, githubProvider);
    }


    const resetPassWord = (email) => {
        return sendPasswordResetEmail(auth, email);
    } 

    const logout = () => {
        return signOut(auth);
    }

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
            setLoading(false);
		});
		return () => unsubscribe();
	}, []);

	const authData = {
		user,
		setUser,
		createUser,
        signInWithGoogle,
        signInWithGitHub,
        signIn,
        resetPassWord,
        logout,
        loading,
        setLoading,
        updateUser
	};
	return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;

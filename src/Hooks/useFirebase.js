import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [error, setError] = useState('');
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = (location, history) => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
               // console.log(user);
                setError('');
            })
    }
    //**********************************/
    const registerUser = (email, password,name) => {
        if (password.length < 6) {
            setError('Password Must be 6 character long');
            return;
        }
        else {
            setError('');
        }
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)

            .then(result => {
                const newUser = { email, password };
                setUser(newUser);
                const user = result.user;
                //console.log(newUser);

                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                 console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


    //ovserver
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        handleGoogleSignIn,
        logOut,
        registerUser,
        loginUser,
        error,
        setError,
        isLoading,


    }
};

export default useFirebase;
import { useEffect, useRef, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getIdToken,
} from "firebase/auth";
import firebaseInitialization from "../Firebase/firebaseInitialization";
import { useNavigate } from "react-router";
import { useAlert } from "react-alert";

const googleProvider = new GoogleAuthProvider();
firebaseInitialization();

const useFirebase = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [authToken, setAuthToken] = useState("");
  const navigate = useNavigate();
  const alert = useAlert();
  const auth = getAuth();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  // ===========================
  // Google Signin Functionality
  // ===========================
  const handleGoogleSignin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // ==========================
  // Form Signup Functionality
  // ==========================
  const handleFormSignUp = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // =========================
  // Form Signin Functionality
  // =========================
  const handleFormSignin = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ==========================
  // Current User Functionality
  // ==========================
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo(user);
        getIdToken(user).then((idToken) => {
          setAuthToken(idToken);
        });
      }
      setLoading(false);
    });
  }, [auth]);

  // =====================
  // Signout Functionality
  // =====================
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUserInfo([]);
        navigate(`/`);
        alert.show("Logout Successful");
      })
      .catch((error) => {
        setError(error);
      });
    setLoading(true);
  };

  return {
    userInfo,
    error,
    auth,
    alert,
    nameRef,
    emailRef,
    passwordRef,
    loading,
    authToken,
    setError,
    navigate,
    setUserInfo,
    handleGoogleSignin,
    handleSignOut,
    handleFormSignUp,
    handleFormSignin,
    setLoading,
  };
};

export default useFirebase;

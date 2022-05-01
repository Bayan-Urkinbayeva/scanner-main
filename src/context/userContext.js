import { createContext, useContext, useEffect, useState } from "react";
import { auth, database } from "../firebase/index";
import {ref, set} from "firebase/database";
import { 
    createUserWithEmailAndPassword, 
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
 } from "firebase/auth";
const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);



export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");
  useEffect(() => {

      setLoading(true);
      
     const unsubscribe =  onAuthStateChanged(auth, (res)  => {
          res ? setUser(res) : setUser(null);
          setError("");
          setLoading(false);
      });
      return unsubscribe;
  }, []);
  //method from firebase to sign up user with email and password
  const registerUser = (email, password, name, surname, position, field, date, in_out ) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
  .then((res) => {
    set(ref(database, 'first_door/Persons/'+res.user.uid),{
      email: email,
      id: res.user.uid,
      name: name,
      surname: surname,
      position: position,
      field: field,
      date: date,
      in_out: false
    })
  }
  )
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  //method from firebase to sign in user with email and password
  const login = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((res) => console.log(res))
    .catch((err) => setError(err.massage))
    .finally(() => setLoading(false))
  };
  //method from firebase to log out user with email and password
  const logout = () => {
      signOut(auth);

  };
  //method from firebase to recover password in case if user forgot
  const forgotPassword = (email) => {
    ///
    sendPasswordResetEmail(auth, email);
  };
  const contextValue = {
      user,
      loading,
      error,
      registerUser,
      login,
      logout,
      forgotPassword
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

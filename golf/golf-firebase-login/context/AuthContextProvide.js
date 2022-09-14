import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const AuthContextProvide = ({ children }) => {
  const [user, setUser] = useState();
  const createUser = (email, password ) => {
    // return 회원가입 함수
  }
  const signIn = (email, password) => {
    // return 로그인 함수
  }
  const logout = () => {
    // return signOut
  }

  useEffect(() => {
    // const subscriber = auth().onAuthStateChanged(auth, (currentUser) => {
    //   setUser(currentUser);
    // });
    // return subscriber;
  }, []);

  return (
    <UserContext.Provider value={{ createUser, signIn, logout, user }}>
      { children }
    </UserContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserContext)
}
import React, { Children, createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

// community에서 만든 모듈 : 구글, 페이스북 로그인
// import { GoogleSignin } from '@react-native-community/google-signin'
// import { LoginManager, AccessToken }from 'react-native-fbsdk';

// createcontext() : props 없이 하위 component로 데잍러르 전달하기 위해 사용
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // 로그인
  const signin = async (email, password) => {
    try{
      await auth().createUserWithEmailAndPassword(email, password);
    }catch(e){
      console.log(e);
    }
  }

  // 로그아웃
  const logout = async () => {
    try{
      await auth().signOut();
    }catch(e){
      console.log(e);
    }
  }

  // 회원가입
  const signup = async (email, password) => {
    try{
      await auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
          firestore.collection('members').doc(auth().currentUser.uid) // members : DB 이름
            .set({
              fname: '',
              gender: '',
              email: email,
              tel: '',
              createAt: firestore.Timestamp.fromDate(new Date()),
              userImg: null
            })
            .catch(error => console.log('데이터 저장 중 에러 발생', error));
        })
    }catch(e){
      console.log(e);
    }
  }

  /*
  // 구글 로그인 - @react-native-community/google-signin 모듈 설치 필요
  const googleLogin = async () => {
    try{
      const { idToken } = await googleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
    }catch(e){
      console.log(e);
    }
  }
  */

  return (
    <AuthContext.Provider value={{ user, setUser, signin, signup, logout }}>
      { children }
    </AuthContext.Provider>
  )
}
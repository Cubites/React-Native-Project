import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthProvider';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Routes = () => {
  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true); 

  // Handle user state changes
  const onAuthStateChanged = (user) => {
    setUser(user);
    if(initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; //unsubscribe on unmount
  }, []);

  if(initializing) return null;

  return (
    <NavigationContainer>
      { user ? <AppStack /> : <AuthStack /> }
    </NavigationContainer>
  )
}

export default Routes
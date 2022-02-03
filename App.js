import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home';
import AfficheUtilisateurs from './pages/AfficheUtilisateurs';
import AjoutUtilisateur from './pages/AjoutUtilisateur';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="AfficheUtilisateurs"
          component={AfficheUtilisateurs}
        />
        <Stack.Screen name="AjoutUtilisateur" component={AjoutUtilisateur} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

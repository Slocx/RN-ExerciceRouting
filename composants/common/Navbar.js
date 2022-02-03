/* eslint-disable prettier/prettier */
import { View, Text, Button } from 'react-native';
import React from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export const Navbar = ({navigation}) => {

    const handleHome = () => {
        navigation.navigate('Home');
    };

    const handleAfficheUtilisateurs = () => {
        navigation.navigate('AfficheUtilisateurs');
    };

    const handleAjoutUtilisateur = () => {
        navigation.navigate('AjoutUtilisateur');
    };

    const handleBack = () => {
        navigation.goBack();
    };

  return (
    <View>
      <Text> Ceci est ma Navbar</Text>
      <Pressable
        style={ ({pressed}) => ({backgroundColor: pressed ? '#0000ff' : '#ff751a'})}
        onPress={handleHome}
      >
          <Text>page Home</Text>
      </Pressable>
      <Pressable
        style={ ({pressed}) => ({backgroundColor: pressed ? '#0000ff' : '#ff751a'})}
        onPress={handleAfficheUtilisateurs}
      >
          <Text>page AfficheUtilisateurs</Text>
      </Pressable>
      <Pressable
        style={ ({pressed}) => ({backgroundColor: pressed ? '#0000ff' : '#ff751a'})}
        onPress={handleAjoutUtilisateur}
      >
          <Text>page AjoutUtilisateur</Text>
      </Pressable>
      <Button title="retour" onPress={handleBack}/>
    </View>
  );
};

export default Navbar;

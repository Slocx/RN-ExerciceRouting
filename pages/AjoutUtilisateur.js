/* eslint-disable prettier/prettier */
import {View, TextInput, Button, Text} from 'react-native';
import React, {useState} from 'react';
import Navbar from '../composants/common/Navbar';

export const AjoutUtilisateur = ({route, navigation}) => {
    
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
  
    const handleNom = value => {
      setNom(value);
    };
  
    const handlePrenom = value => {
      setPrenom(value);
    };
  
    const ajoutUtilisateur = () => {
        // Fonctionnalité pour ajouter dans le fichier db.json à ajouter !
        navigation.goBack();
      };

    return (
      <View>
          <View>
        <Navbar navigation={navigation}/>
            <Text> Ceci est la page AfficheUtilisateurs</Text>
        </View>
        <TextInput
          onChangeText={handleNom}
          placeholder="Nom"
          keyboardType="default"
        />
        <TextInput
          onChangeText={handlePrenom}
          placeholder="Prénom"
          keyboardType="default"
        />
        <Button title="Ajout Utilisateur" onPress={ajoutUtilisateur} />
      </View>
    );
  };

export default AjoutUtilisateur;

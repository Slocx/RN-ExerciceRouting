/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import Navbar from '../composants/common/Navbar';

//import du fichier db.json stockant les utilisateurs
import data from '../src/db.json';

export const AfficheUtilisateurs = ({navigation}) => {

  return (
    <View>
        <Navbar navigation={navigation}/>
      <Text> Ceci est la page AfficheUtilisateurs</Text>
      {/* Affichage de tous les utilisateurs stocké dans db.json un par un */}
      <View>
        {data.utilisateurs.map((utilisateurs) => {
            return (
              <View key={utilisateurs.id}>
                <Text> Utilisateur Numéro : {utilisateurs.id}</Text>
                <Text> Prénom de l'utilisateur : {utilisateurs.prenom} </Text>
                <Text> Nom de l'utilisateur : {utilisateurs.nom} </Text>
              </View>
            );
          })
        }
      </View>
    </View>
  );
};

export default AfficheUtilisateurs;

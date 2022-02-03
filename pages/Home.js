/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import Navbar from '../composants/common/Navbar';

const Home = ({navigation}) => {
  return (
    <View>
      <Navbar navigation={navigation}/>
      <Text> Ceci est la page Home</Text>
    </View>
  );
};

export default Home;

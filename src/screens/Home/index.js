/* eslint-disable prettier/prettier */
import React from 'react';
import {View, ImageBackground, Text, Pressable, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import styles from './styles'; 
import DestinationSearch from '../DestinationSearch';


const HomeScreen = props => {
  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground
        source={require('../../../assets/images/home.jpg')}
        style={styles.image}>
        <View style={styles.logo}>
          <View style={styles.logo1}>
            <Icon
              name="home-roof"
              size={50}
              style={styles.logo2}
              color="white"
            />
            <Text style={styles.title2}>LivelyHomes</Text>
          </View>
          <Text style={styles.title1}></Text>
        </View>

        <View style={styles.searchbar}>

        <Pressable
            style={styles.searchButton}
            onPress={() => navigation.navigate('DestinationSearch')}>
               <Icon
              name="home-search-outline"
              size={35}
              style={styles.searchIcon}
              color="#f15454"
              
            />
              <Text style={styles.buttonText}>Enter area to see available Homes </Text>
              </Pressable>
              </View>
        <View style={styles.title3flex}>
          
          <Pressable
            style={styles.button}
            onPress={() => console.warn('Hello')}>
              <Text style={styles.title3}>let's find a home for you</Text>
              </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

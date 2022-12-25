/* eslint-disable prettier/prettier */
import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import SearchResults from '../SearchResults';

const Nomembers = props => {
  const [men, setMen] = useState(0);
  const [women, setWomen] = useState(0);
  const [children, setChildren] = useState(0);
  const [family, setFamily] = useState(0);

   const navigation = useNavigation();
  return (

    <View style={{justifyContent:'space-between',height: '100%'}}>
    <View style={styles.container}>
     
      <View style={styles.row}>
        <View>
          <Text style={styles.category}>Men</Text>
          <Text style={styles.subcategory}>Age Above 10yrs</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
            onPress={() => setMen(Math.max(1, men - 1))}
            style={styles.button}>
            <Text style={{fontSize: 23, color: '#474747'}}>-</Text>
          </Pressable>

          <Text style={{marginHorizontal: 16, fontSize: 16}}> {men} </Text>

          <Pressable
            onPress={() => setMen(Math.min(10, men + 1))}
            style={styles.button}>
            <Text style={{fontSize: 23, color: '#474747'}}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.row}>
        <View>
          <Text style={styles.category}>Women</Text>
          <Text style={styles.subcategory}>Age Above 10yrs</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
            onPress={() => setWomen(Math.max(1, women - 1))}
            style={styles.button}>
            <Text style={{fontSize: 23, color: '#474747'}}>-</Text>
          </Pressable>

          <Text style={{marginHorizontal: 16, fontSize: 16}}> {women} </Text>

          <Pressable
            onPress={() => setWomen(Math.min(10, women + 1))}
            style={styles.button}>
            <Text style={{fontSize: 23, color: '#474747'}}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.row}>
        <View>
          <Text style={styles.category}>Children</Text>
          <Text style={styles.subcategory}>Age below 10yrs</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
            onPress={() => setChildren(Math.max(1, children - 1))}
            style={styles.button}>
            <Text style={{fontSize: 23, color: '#474747'}}>-</Text>
          </Pressable>

          <Text style={{marginHorizontal: 16, fontSize: 16}}> {children} </Text>

          <Pressable
            onPress={() => setChildren(Math.min(10, children + 1))}
            style={styles.button}>
            <Text style={{fontSize: 23, color: '#474747'}}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.row}>
        <View>
          <Text style={styles.category}>Family</Text>
          <Text style={styles.subcategory}>Members In Total</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
            onPress={() => setFamily(Math.min(15, men + women + children))}
            style={styles.button}>
            <Text style={{fontSize: 23, color: '#474747'}}>=</Text>
          </Pressable>

          <Text style={{marginHorizontal: 16, fontSize: 16}}> {family} </Text>
        </View>
      </View>
    </View>
    
      <Pressable 
      onPress={() => 
        navigation.navigate('Home', { 
          screen: 'Explore',
      params: { 
        screen: 'SearchResults',
      },
     })
    }
      style={{
        marginBottom: 20,
        backgroundColor: '#f15454',alignItems:'center',
        justifyContent: 'center',
        height: 50,
        marginHorizontal: 20,
        borderRadius: 10,
      }} >
        <Text style={{fontSize: 20,color: 'white', fontWeight:'bold',}}>
          Search
        </Text>
      </Pressable>
    
    </View>
  );
};

export default Nomembers;

const styles = StyleSheet.create({
  container: {},
  category: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  subcategory: {
    color: '#8d8dbd',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    marginHorizontal: 20,
  },
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderColor: '#676767',
  },
});

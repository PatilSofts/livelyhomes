import { View, Text, Image, useWindowDimensions, Pressable } from 'react-native';
import React from 'react';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';
const Post = (props) => {

  const post = props.post;
  const width = useWindowDimensions().width;

  const navigation = useNavigation();

  const goToPostScreen = () => {
    navigation.navigate('Post', {postId: post.id});
  }


  return (
    <Pressable onPress={goToPostScreen} style={[styles.container, { width: width - 50}]}>
        <View style={styles.innerContainer}>
      <Image style={styles.image}
             source={{uri: post.image}}/>


      <View style={{flex:1}}>
      <Text style={styles.type}> {post.type} </Text>
      <Text style={styles.location}> {post.location} </Text>
      <Text style={styles.otherDetails}> {post.otherDetails} </Text>      
      <Text style={styles.prices}> 
      
      <Text style={styles.newPrice}>  Rs.{post.newPrice} /</Text>
      <Text style={styles.period}>Month </Text>
      </Text>
      
      </View>
      </View>
    </Pressable>
  );
};

export default Post;
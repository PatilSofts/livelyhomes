import { View, Text, Image,Pressable } from 'react-native';
import React from 'react';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';


const Post = (props) => {

  const post = props.post;

  const navigation = useNavigation();

  const goToPostScreen = () => {
    navigation.navigate('Post', {postId: post.id});

  }

  return (
    <Pressable onPress={goToPostScreen} style={styles.container}>
      <Image style={styles.image}
             source={{uri: post.image}}/>
      
      <Text style={styles.type}> {post.type} </Text>
      <Text style={styles.location}> {post.location} </Text>
      <Text style={styles.otherDetails}> {post.otherDetails} </Text>
      <Text style={styles.locationDetails}> {post.locationDetails} </Text>
      <Text style={styles.prices}> 
      <Text style={styles.oldPrice}> ₹ {post.oldPrice}  </Text>
      <Text style={styles.newPrice}>  ₹ {post.newPrice} /</Text>
      <Text style={styles.period}>Month </Text>
      </Text>
      <Text> Remember ratings here</Text>
    </Pressable>
  );
};

export default Post;
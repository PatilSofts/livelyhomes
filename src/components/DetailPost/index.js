import { View, Text, Image , ScrollView } from 'react-native';
import React, {useEffect, useState}  from 'react';
import styles from './styles.js';
import { API, graphqlOperation } from 'aws-amplify';
import {listPosts} from '../../graphql/queries';

const Post = (props) => {
  const post = props.post;
  const [posts, setPosts] = useState([]);
  useEffect( () => {
    const fetchPosts = async () => {
      try {
        const postResult = await API.graphql(
          graphqlOperation(listPosts)
        )
        setPosts(postResult.data.listPosts.items);
      } catch (e) {
        console.log(e);

      }
    }

    fetchPosts();
  }, [] )
  

  return (
    <ScrollView>
    <View style={styles.container}>
      <Image style={styles.image}
             source={{uri: post.image}}/> 
      
      <Text style={styles.type}> {post.type} </Text>
      <Text style={styles.location}> {post.location} </Text>
      <Text style={styles.otherDetails}> {post.otherDetails} </Text>
      <Text style={styles.locationDetails}> {post.locationDetails} </Text>
      <Text style={styles.prices}> 
      <Text style={styles.oldPrice}> Rs.{post.oldPrice}  </Text>
      <Text style={styles.newPrice}>  Rs.{post.newPrice} /</Text>
      <Text style={styles.period}>Month </Text>
      </Text>
      <Text style={styles.note}> {post.note} </Text>
      <Text> Remember ratings here</Text>
    </View>
    </ScrollView>
  );
};

export default Post;
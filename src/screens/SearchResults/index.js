import { View, FlatList } from 'react-native';
import React, {useEffect,useState} from 'react';

import Post from '../../components/Post';
import { API, graphqlOperation } from 'aws-amplify';
import {listPosts} from '../../graphql/queries';

const SearchResults = (props) => {

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
    <View>
     <FlatList 
     data={posts}
     renderItem={({item}) => <Post post={item} /> }
     />
    </View>
  );
};

export default SearchResults;
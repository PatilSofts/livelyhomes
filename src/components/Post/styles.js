import  { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container:{
        margin:7,



    },
    image: {
        width:'100%',
        aspectRatio: 3/2 ,
        resizeMode:'cover',
       borderRadius:15,
      },
      type:{
        marginVertical: 10,
        color:'black',
        fontWeight:"bold",
        fontSize:21,
        fontStyle:'italic',
        textTransform:'uppercase',
      },
      
      location:{
        color:'black',
        fontSize:20,
        lineHeight:27,
        textTransform:'uppercase',
                
      },
      otherDetails:{
        fontSize: 17,
        color:'black',
        
      },
      locationDetails:{
        fontSize: 17,
        lineHeight:20,
        margin:10,
        
      },
      oldPrice:{
        color:'black',
        fontSize:17,
        textDecorationLine: 'line-through',
      },
      newPrice:{
        fontSize:18,
        color:'black',
        fontWeight:'bold',
      },
      period:{ 
        fontStyle:"italic",
        color:'black',
        fontSize:15,

      },
      
      
     
      
});


export default styles;
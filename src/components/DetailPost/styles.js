import  { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container:{
        margin:7,
    },
    image: {
        width:'100%',
        aspectRatio:1/1,
        resizeMode:'cover',
       borderRadius:15,
      },
      type:{
        marginVertical: 10,
        color:'black',
        fontWeight:"bold",
        fontSize:27,
        fontStyle:'italic',
        textTransform:'uppercase',
        borderColor:'black',
        borderWidth:1,
        borderRadius:10,
        alignSelf:'baseline',
      },      
      location:{
        color:'black',
        fontSize:23,
        lineHeight:30,
        textTransform:'uppercase',
        fontWeight:'bold',
        borderColor:'black',
        borderWidth:1,
        borderRadius:10,
        alignSelf:'baseline',
      },
      otherDetails:{
        marginTop:5,
        marginLeft:5,
        fontSize: 22,
        color:'black',
        borderBottomWidth:2,
        alignSelf:'baseline',

      },
      locationDetails:{
        fontSize: 18,
        lineHeight:20,
        margin:10,
        color:'black',  
              
      },
      oldPrice:{
        color:'black',
        fontSize:27,
        textDecorationLine: 'line-through',
      },
      newPrice:{
        fontSize:28,
        color:'black',
        fontWeight:'bold',
      },
      period:{ 
        fontStyle:"italic",
        color:'black',
        fontSize:20,
      },
      note:{ 
        fontStyle:"italic",
        color:'black',
        fontSize:15,
      },
});


export default styles;
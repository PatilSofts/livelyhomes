import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 5,
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  type: {
    marginTop: 7,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 21,
    fontStyle: 'italic',
    textTransform: 'uppercase',
  },

  location: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 27,

    textTransform: 'uppercase',
  },
  otherDetails: {
    fontSize: 17,
    color: 'black',
  },

  oldPrice: {
    color: 'black',
    fontSize: 17,
    textDecorationLine: 'line-through',
  },
  newPrice: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  period: {
    fontStyle: 'italic',
    color: 'black',
    fontSize: 15,
  },
});

export default styles;

/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  title1: {
    fontSize: 50,
    fontWeight: 'bold',
    margin: 5,
    marginLeft: 7,
    color: '#662E1C',
  },
  title2: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: -10,
    color: '#C9A66B',
  },
  title3flex: {
    flexDirection: 'column',
    position: 'absolute',
    bottom: 10,
    margin: 5,
  },
  title3: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 9,
    padding: 10,
  },
  logo1: {
    flexDirection: 'column',
  },
  logo2: {
    margin: -7,
  },
  searchButton: {
    backgroundColor: '#ffff',
    width: 350,
    height: 50,
    borderRadius: 23,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
  },

  buttonText: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  searchbar: {alignItems: 'center'},
});
export default styles;

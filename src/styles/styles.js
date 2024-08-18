// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    justifyContent: 'center', //alinhamento vertical
    alignItems: 'center', //alinhamento horizontal
    backgroundColor: '#000', 
  },
  containerOff: {
    flex: 1,
    justifyContent: 'center', //alinhamento vertical
    alignItems: 'center', //alinhamento horizontal
    backgroundColor: '#ffffff', 
  },
  juramentoOff: {  
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
  juramentoOn: {  
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  juramentoLuz: {  
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#4efc03',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'red',
  },
});

export default styles;

import React, {useState} from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './src/styles/styles';
import symbolOn from './assets/imagens/symbol-on.png';
import symbolOff from './assets/imagens/symbol-off.png';

export default function App() {
  const [isActivated, setisActivated] = useState(false);



  function handleSymbol() {
    setisActivated((oldValue:boolean) => {
      return !oldValue;
    });
  }

  return (
    <View style={isActivated ? styles.containerOn : styles.containerOff}>
      {/* Até mesmo um comentário tem de ser um objeto */}
      { /* <Text style={styles.titleStyle}>Hello Gleyce</Text> */ }
      <TouchableOpacity onPress={handleSymbol}>
        <Image 
          source={isActivated ? symbolOn : symbolOff} />
      </TouchableOpacity>
      <Text style={isActivated ? styles.juramentoOn : styles.juramentoOff }>No dia mais claro, na noite mais escura, nenhum mal escapará a minha visão!Que aqueles que adoram o poder do mal, temam o meu poder ...</Text>
      <Text style={isActivated ? styles.juramentoLuz : styles.juramentoOff }>A LUZ DO LANTERNA VERDE!</Text>
    </View>
  );
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
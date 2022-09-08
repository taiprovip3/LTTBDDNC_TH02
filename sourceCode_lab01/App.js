import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


export default function App() {

  const [perfectText, setPerfectText] = useState('');
  const [temp, setTemp] = useState('');
  function showSomePerfectText(){
    setTemp(perfectText);
  }

  return (
    <View>




      <View style={ styled.outer }>
        <Text>
          <TextInput
          placeholder="Enter something"
          style={ styled.inputStyle }
          onChangeText={setPerfectText}
          />
        </Text>
      </View>
      <View style={ styled.outer }>
        <Button title='Show' onPress={ showSomePerfectText } />
      </View>
      <View>
        <Text>{temp}</Text>
      </View>



    </View>
  );
}

const styled = StyleSheet.create({
  outer: {
    flext: 1,
  },
  inputStyle: {
    borderColor: 'red',
    borderRadius: '50px',
    padding: '10px'
  }
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 2,
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

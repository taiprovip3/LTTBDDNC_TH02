import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

export default function App() {

  const accounts = [

    {username: 'taiproduaxe1', password: '123123az'},
    {username: 'taiproduaxe2', password: '123123az'},
    {username: 'taiproduaxe3', password: '123123az'},
    {username: 'taiproduaxe4', password: '123123az'}

  ];
  return (
    <View>

      <View>
        <Text>Username:</Text>
        <TextInput
          style = { styled.inputStyle }
          placeholder='Enter your username'
        />
        <Text>Password:</Text>
        <TextInput
          style = { styled.inputStyle }
          placeholder='Enter your password'
        />
      </View>
      <View>
        <Button
        style = { styles.buttonStyle }
        title='Login'
        />
      </View>
      <View>
        
     </View>



    </View>
  );
}
const styled = StyleSheet.create({
  inputStyle: {
    padding: '20px',
    backgroundColor: '#000000',
    color: 'white',
    borderRadius: '25px'
  }
});
const styles = StyleSheet.create({
    buttonStyle: {
        color: 'red',
        marginTop: 20,
        padding: 20,
        backgroundColor: 'green'
    }
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
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

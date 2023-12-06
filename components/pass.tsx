import {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import React from 'react';

export default function Pass() {
  const [password, setPassword] = useState('');
  console.log('hii');

  let p = '12345678910!@#$%^&*()_+';
  const changePass = () => {
    let  passLocal = "";
    for (let i = 0; i < 10; i++) {
      passLocal = passLocal + p[Math.floor(Math.random() * p.length)]
    }
    setPassword(passLocal)
    let a = 23;
  };

  return (
    <View>
      <Button title="change password" onPress={changePass} />
      <TextInput keyboardType='numeric' placeholder="enter length" />
      <Text>password = {password}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

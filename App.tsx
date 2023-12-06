import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ContactList from './components/ContactList';
import FlatCards from './components/FlatCards';
import BgChanger from './components/BgChanger';
import Pass from './components/pass';
import Input from './components/input';
import Button from './components/Button';
import ImageSlider from './components/ImageSlider';
import NewBox from './components/NewBox';

export default function App() {
  const [first, setfirst] = useState('');
  const [last, setlast] = useState('');
  return (
    <SafeAreaView>
      <ScrollView>
        <NewBox/>
        <Text>
          Helo
        </Text>
        {/* <Input
          placeholder="firstName"
          value={first}
          onChangeText={e => {
            setfirst(e)
            // console.log(e);
          }}
        />
        <Input placeholder="lastName" 
        value={last}
        onChangeText={e=>{
          setlast(e)
        }}
        /> */}
        {/* <Button
          title="submit"
          onPress={() => {
            console.log({firstname: first, lastname: last});
          }}
        /> */}
        {/* <Pass />
        <BgChanger/>
        <ImageSlider/> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

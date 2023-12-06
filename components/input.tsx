import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Input(props:any) {
  return (
   <TextInput
   {...props}
    style={{
    borderWidth:2,
    borderColor:"black",
    borderRadius:10,
    padding:5,
    fontSize:20,
    margin:10
   }}/>
  )
}

const styles = StyleSheet.create({})
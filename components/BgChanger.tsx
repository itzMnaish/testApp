import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React, { useState } from 'react'



export default function BgChanger() {
    const[randomColor,setrandomColor] =useState("black") 
    
    function Bgcolor (){
        const hexColor = "0123456789ABCDEF";
        let color = "#"
        for (let i = 0; i < 6; i++) {
        color+= hexColor[Math.floor(Math.random()*16)]
        }
        setrandomColor(color)
    }

  return (
    
    <View style={{
        backgroundColor:randomColor,
        flex:1,
        height:344,
        alignItems:'center',
        justifyContent:'center',
    }}>
        <TouchableOpacity onPress={Bgcolor}
        style={{backgroundColor:'green', margin:34,padding:12}}>
                <Text>Press me</Text>
        </TouchableOpacity>
    </View>
    
  )
}

const styles = StyleSheet.create({})
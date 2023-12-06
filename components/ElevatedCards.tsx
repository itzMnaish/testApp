import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>On</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Us</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>and</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>get</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>🙄</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        // backgroundColor:'green',
        height:200,
        // flex:1,
        // alignContent:'center',
        // justifyContent:'center',
        
        
    },
    headingText:{
        
        // backgroundColor:'red',
        textAlign:'center',
        color:'green',
        fontSize:24,
        fontStyle:'italic',
        fontWeight:'bold',
    },
    container:{

        padding:8,
    },
    card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:8
        
    },
    cardElevated:{
        backgroundColor:'yellow',
        elevation:4,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor:'green',
        shadowOpacity:0.6,
        shadowRadius:2,

    },
})
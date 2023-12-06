import { Image, StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(WebsiteLink: string){
  Linking.openURL(WebsiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.cards,styles.elevatedCard]}>
      <View style={styles.headingContainer}></View>
        <Text style={styles.headerText}>
            what's new in javascript
        </Text>   
        </View>
      <Image
      source={{
        uri:'https://st2.depositphotos.com/1001435/6033/i/450/depositphotos_60338353-stock-photo-red-apple-on-the-hand.jpg'
      }}
      style={styles.cardImage}
      />
      <View style={styles.bodyContainer}>
        <Text numberOfLines={1}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum impedit cum, laudantium maxime alias consectetur provident qui aspernatur temporibus. Ipsum, non? Facere tempora laudantium quibusdam labore, maxime asperiores repellat impedit voluptates perferendis blanditiis laborum eveniet minus laboriosam libero velit dolore, natus maiores dolorem numquam! Quibusdam?
        </Text>
      </View>
      
      <View style={styles.footerContainer}>
      <TouchableOpacity onPress={()=>{
        openWebsite('https://www.google.com/')
      }}>
        <Text style={styles.socialLink}>
            Read More
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        openWebsite('https://www.facebook.com/')
      }}>
        <Text style ={styles.socialLink}>
            facebook link
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
      fontSize:23,
      fontWeight:'bold',
      paddingHorizontal:7,

    },
    cards:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      color:'#e3ba8f',
      width:350,
      height:50,
      borderRadius:6,
      // marginBottom:12,
      marginVertical:8,
      marginHorizontal:8,
    },
    elevatedCard:{
      backgroundColor:'#ede7e1',
      // elevation:3,
      // shadowOffset:{
      //   width:1,
      //   height:1,
      // },
      // shadowColor:'red',
      // shadowOpacity:0.4,
    },
    headingContainer:{
      // height:40,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
    },
    headerText:{
      color:'black',
      fontSize:16,
      fontWeight:'700',
    },
    cardImage:{
        height:100,
        marginHorizontal:8,
        borderRadius:4
    },
    bodyContainer:{
          padding:10,
    },
    footerContainer:{
      padding:10,
      flexDirection:'row',
      justifyContent:'space-evenly',
    },
    socialLink:{
      fontSize:15,
      color:'black',
      backgroundColor:'#e3ba8f',
      paddingHorizontal:12,
      paddingVertical:8,
      borderRadius:6,
    },


})
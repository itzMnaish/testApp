import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contact = [
        {    
            uid:1,
            name:'manish',
            status: 'just a extra ordinary teacher', 
            imgUrl: 'https://images.pexels.com/photos/13037579/pexels-photo-13037579.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        },
        {
            uid:2,
            name:'rohan',
            status: 'woosho a extra ordinary teacher', 
            imgUrl: 'https://images.pexels.com/photos/19137864/pexels-photo-19137864/free-photo-of-a-green-snake-is-hanging-from-a-branch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        },
        {
            uid:3,
            name:'mohan',
            status: 'nature images', 
            imgUrl: 'https://images.pexels.com/photos/18715721/pexels-photo-18715721/free-photo-of-a-close-up-of-a-green-plant-with-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        },
    ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
           {contact.map(({uid, name, status, imgUrl})=>(
            <View key={uid}  style={styles.userCard}>
                <Image
                   source={{
                    uri: imgUrl
                   }}
                   style={styles.userImage}
                />
                <Text style={styles.userUid}>{uid}</Text>
                <View style={{flexDirection:'column'}}>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>

                </View>
            </View>
           ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
     fontSize:16,
     fontWeight:'bold',
     color:'black',
     paddingHorizontal:7,
    },
    container:{
        paddingHorizontal:7,
        marginBottom:4,
        // backgroundColor:'red',
        padding:6,
        
    },
    userCard:{
        // flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:7,
        marginHorizontal:6,
        backgroundColor:'#ede7e1',
        padding:8,
        borderRadius:6,
        
    },
    userImage:{
        width:60,
        height:60,
        borderRadius:30,

        
    },
    userUid:{
        // backgroundColor:'red',
        marginHorizontal:4,

    },
    userName:{
        color:'black',
        fontSize:15,
        fontWeight: '600',
        marginHorizontal:6,



    },
    userStatus:{
        // backgroundColor:'red',
         marginLeft:5,
    },
})
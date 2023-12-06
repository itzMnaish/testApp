import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://st2.depositphotos.com/1001435/6033/i/450/depositphotos_60338353-stock-photo-red-apple-on-the-hand.jpg',
          }}
          style={styles.cardImages}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Hawai</Text>
          <Text style={styles.cardLabel}>pink City, Jaipur</Text>
          <Text style={styles.cardDescription}>
            There are somethng and tell me someginh about and what happens
          </Text>
          <Text style={[styles.cardFooter, {marginBottom:6}]}>Pink , City, Jaipur</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    backgroundColor:'red',
    textAlign:'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    
    width: "70%",
    height:250,
    borderRadius: 6,
  },
  cardElevated: {
    // backgroundColor:'red',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
    
  },
  cardImages: {
    margin: 15,
    height: 90,
    width: "90%",
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardTitle: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLabel: {
    color: 'black',
    fontSize: 16,
    marginBottom: 4,
  },
  cardDescription: {
    color: 'black',
    fontSize: 12,
    marginBottom: 12,
  },
  cardFooter: {
    color: 'black',
  },
});

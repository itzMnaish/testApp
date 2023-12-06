import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Button(props:any) {
  return (
    <TouchableOpacity  {...props}
      style={{
        backgroundColor: 'gray',
        padding: 10,
        borderRadius: 12,
        margin: 10,
      }}
      activeOpacity={0.8}>
      <Text
        style={{
          fontSize: 20,
          color: 'white',
          textAlign: 'center',
          fontWeight: '700',
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});

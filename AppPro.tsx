import React from 'react'

import {
    View, 
    Text, 
    StyleSheet,
    useColorScheme
} from 'react-native'

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'
  return(
    <View style={styles.container}>
     <Text style={isDarkMode ? styles.WhiteText : 
    styles.WhiteText}>
        Hello World
     </Text>
     <Text/>
     <Text>november</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'black',

    },
    WhiteText:{
        color: 'white'
    },
    darkText:{
        color: 'black'
    }
})

export default AppPro
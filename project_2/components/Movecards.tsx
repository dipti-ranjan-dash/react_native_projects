import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Movecards() {
  return (
    <SafeAreaView>
        <View>
        <Text style={styles.headtext}>
          Techincal Skills
        </Text>
      </View>
    
    <ScrollView horizontal >

    

    <View style={[styles.card]  /*style for each card in array cuz of may types*/ }>
        <Image
         source={require('../images/react.png')}
         style={styles.image}
         
        />

    </View>

    <View style={[styles.card]  /*style for each card in array cuz of may types*/ }>
        <Image
         source={require('../images/android.png')}
         style={styles.image}
         
        />

    </View>

    <View style={[styles.card]  /*style for each card in array cuz of may types*/ }>
        <Image
         source={require('../images/python.png')}
         style={styles.image}
         
        />

    </View>
    <View style={[styles.card]  /*style for each card in array cuz of may types*/ }>
        <Image
         source={require('../images/github.png')}
         style={styles.image}
         
        />

    </View>
    <View style={[styles.card]  /*style for each card in array cuz of may types*/ }>
        <Image
         source={require('../images/aws.jpg')}
         style={styles.imageaws}
         
         
        />

    </View>

    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

headtext: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF'
},




card: {

  borderRadius: 10,
  flex:1, //elements are arranged and aligned within a container.
  height:150,
  width:150,
  justifyContent:'center',
  alignItems:'center',
  margin:5,
  padding:10,
  backgroundColor: '#FFFFFF'

},

image: {
  height: 150,
  width:150,
  borderRadius:10

},

imageaws:{
  height: 150,
  width:150,
  borderRadius:10,
  resizeMode: 'stretch'
  
}

})
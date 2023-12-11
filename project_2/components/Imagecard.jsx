import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ImageCard() {
  return (
    <View>
      <Text style={styles.headingtext2}>Bio Card</Text>

      <View style={styles.card}>
        <Image
          source={require('../images/mg1.jpg')}
          style={styles.image}
        />
        <Text style={styles.headtext}>
          My name is dipti ranjan dash. 
          I am a UG student in CGU. 
          I am very much intrested in react native.{'\n'}
          Nice to meet you
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headtext: {
    fontSize: 20,
    color: '#000000',
    padding: 10
  },

  headingtext2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },


  card: {
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center', // Center horizontally
    // justifyContent:'center', 
    height:300,
    padding:10,
    margin: 10
    
    
    
  },
  image: {
    width: 300,
    height: 150,
    borderRadius: 20,
    
  },
});

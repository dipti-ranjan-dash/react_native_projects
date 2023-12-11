import { StyleSheet, Text, View, Linking, TouchableOpacity, Image } from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openLink(openLink: string) {
    Linking.openURL(openLink);
  }

  return (
    <View>

      <Text style={styles.headingText}>
             Social Media Card
      </Text>

      <View style={styles.card}>
        <Image

        source={require('../images/linkedin.png')}
        style={styles.image}

        />
      
      <View style={styles.button}>

      <TouchableOpacity onPress={() => openLink('https://www.linkedin.com/in/dipti-ranjan-dash-899180197/')}>
        <Text style={styles.headingText2}> Follow me on LinkedIn  </Text>
      </TouchableOpacity>

    
      </View >


      <Image

source={require('../images/githubdipti.png')}
style={styles.image}

/>

<View style={styles.button}>
<TouchableOpacity onPress={()=> openLink('https://github.com/SATAN-X')}>
    <Text style={styles.headingText2}> Follow me on Github </Text>
</TouchableOpacity>

</View>
      
      <Image

        source={require('../images/insta.png')}
        style={styles.image}

        />

      <View style={styles.button}>
        <TouchableOpacity onPress={()=> openLink('https://instagram.com/dipti_ranjandash?igshid=OGQ5ZDc2ODk2ZA==')}>
            <Text style={styles.headingText2}> Follow on Insta </Text>
        </TouchableOpacity>

      </View>

     

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },

  headingText2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000'
  },

card: {
  borderRadius: 20,
  backgroundColor: '#FFA500',
  alignItems: 'center', // Center horizontally
  height:900,
  padding:10,
  margin:10
},
button :
{
  borderRadius: 10,
  backgroundColor: '#FFFFFF',
  margin: 10,
  padding:2
},

image:{
  width: 350,
  height: 200,
  borderRadius: 20,




}

});


 
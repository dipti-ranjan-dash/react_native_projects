import { ScrollView, StyleSheet, Text, View ,Image, SafeAreaView} from 'react-native'
import React from 'react'

export default function Flatcard() {
  return (
    <SafeAreaView>

    
      <View>
        <Text style={styles.headtext}>
          Photography Skills
        </Text>
      </View>

      

<ScrollView>
    <View style={styles.container}>
    

      <View style={[styles.card]  /*style for each card in array cuz of may types*/ }>
      <Image
         source={require('../images/sun.jpg')}
         style={styles.image}
         
        />
     </View>

   
     <View style={[styles.card]  /*style for each card in array cuz of may types*/ }>
      <Image
         source={require('../images/car.jpg')}
         style={styles.image}
         
        />
     </View>

    
     <View style={[styles.card]  /*style for each card in array cuz of may types*/ }>
      <Image
         source={require('../images/bird1.png')}
         style={styles.image}
         
        />
     </View>

    


    </View>

    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

headtext: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff'
},

container: {
    
    flexDirection: 'row'

},

card: {

  borderRadius: 10,
  flex:1, //elements are arranged and aligned within a container.
  height:150,
  width:150,
  justifyContent:'center',
  alignItems:'center',
  margin:5,
  
  backgroundColor: '#FFFFFF'

},

cardone: {

  
    backgroundColor: '#FF0000',
   
},

cardtwo: {
  backgroundColor: '#00FF00',
 
},

cardthree: {
  backgroundColor: '#0000FF',
 
},

image: {
  borderRadius: 10,
  flex:1, //elements are arranged and aligned within a container.
  height:150,
  width:125,
  justifyContent:'center',
  alignItems:'center',
  resizeMode: 'contain'

},



})
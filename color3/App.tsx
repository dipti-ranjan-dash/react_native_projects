
import React, { useState } from 'react';

import {

  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,

  View,
} from 'react-native';



function App(): JSX.Element {
  const [randomBackground, setRandomBackground] = useState("#000000");
  const [randomBackground2, setRandomBackground2] = useState("#FFFFFF");
  const [randomvalue,setrandomvalue]=useState("")

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF"
    let color = "#"

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)]
      
    }
    setRandomBackground(color)
    setrandomvalue(color)
  }


  const generateColor2 = () => {
    const hexRange = "0123456789ABCDEF"
    let color2 = "#"

    for (let i = 0; i < 6; i++) {
      color2 += hexRange[Math.floor(Math.random() * 16)]
      
    }
    setRandomBackground2(color2)
    
  }





  return (
    <>
    <View style={[styles.container, {backgroundColor: randomBackground}] }>
      
    <TouchableOpacity onPress={() => { generateColor(); generateColor2(); }}>
         <View style={[styles.actionBtn, { backgroundColor: randomBackground2 }]}>
           <Text style={styles.actionBtnTxt}>Press me</Text>
         </View>
        
     </TouchableOpacity>
     
        <View  style={styles.cardElevated}>
         <Text style={styles.description}>Long Press to copy the color code</Text>
         <Text selectable={true} style={styles.colorcode}>{randomvalue}</Text>
         </View> 
    </View>
    </>
    );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: "center",
    justifyContent: "center"
  },

  cardElevated: {
    backgroundColor: '#ffffff',
    marginTop:20,
    borderRadius:10,
    height:100,
    width:270,
    alignItems: "center",
    justifyContent: "center"
  },

  actionBtn: {
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  actionBtnTxt: {
    fontSize: 24,
    color: "#000000",
    textTransform: "uppercase"
  },
  colorcode: {
    fontSize: 24,
    color: "#000000",
    textTransform: "uppercase"
  },
  description: {
    color: '#111111',
    fontSize: 17,
    marginBottom: 8,
    marginTop: 8,
  },
});

export default App;

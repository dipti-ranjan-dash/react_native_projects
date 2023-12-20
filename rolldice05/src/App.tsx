import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  Pressable
} from 'react-native';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

// Type for Dice component props
type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

// Haptic feedback options
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
  impactStyle: "heavy"
};

// Dice component displaying an image
const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

// Main App component
function App(): JSX.Element {
  // State to manage the current dice image
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  const [value,setvalue]=useState(0)



  // Function to roll the dice on button press
  const rollDiceOnTap = () => {
    // Generate a random number between 1 and 6
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    setvalue(randomNumber)

    // Set the dice image based on the random number
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        setDiceImage(DiceOne);
        break;
    }

    // Trigger haptic feedback on dice roll
    ReactNativeHapticFeedback.trigger("impactLight", options);
  };

  // Render the main component
  return (
    <View style={[styles.container, styles.bg]}>
      {/* Display the Dice component with the current dice image */}
      <Dice imageUrl={diceImage} />
      {/* prarentwithchild prop  */}

      {/* Pressable button to roll the dice */}
      <Pressable style={styles.btnContainer}
        onPress={rollDiceOnTap}
      >
        <Text
          style={styles.rollDiceBtnText}
        >
          Roll the dice
        </Text>
      </Pressable>

      <Text style={styles.rollDiceBtnText}>
          {value}
        </Text>


    </View>
  );
}

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },

  bg: {
    backgroundColor: '#000000',
  },

  btnContainer: {
    margin: 30,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

// Export the App component as the default export
export default App;

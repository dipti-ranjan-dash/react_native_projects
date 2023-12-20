import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {deviceHeight, deviceWidth} from './dimensions';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

export default function Home(props: {
  navigation: {navigate: (arg0: string, params?: any) => void};
}) {
  const [age, setAge] = useState('');
  const [genre, setGenre] = useState('');
  const [recommendedStory, setRecommendedStory] = useState('');

  const getBedtimeStory = async () => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/text-davinci-003/completions',
        {
          prompt: `Generate a bedtime story for a ${age}-year-old child in the ${genre} genre in 200 words.`,
          max_tokens: 200,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer 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',
          },
        },
      );

      setRecommendedStory(response.data.choices[0].text);
    } catch (error) {
      console.error('Error getting bedtime story:', error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/images/imgbg.jpg')}
          style={styles.bgimg}>
          <Text style={styles.text}>Wonderful Stories For Kids</Text>

          <View style={styles.uppercontainer}>
            <TextInput
              value={age}
              onChangeText={text => setAge(text)}
              keyboardType="number-pad"
              placeholder="Enter the age of child"
              placeholderTextColor="#273478"
              style={styles.intext}
            />

            <TextInput
              value={genre}
              onChangeText={text => setGenre(text)}
              keyboardType="default"
              placeholder="Enter genre of story"
              placeholderTextColor="#273478"
              style={styles.intext}
            />
          </View>

          <TouchableOpacity
            style={styles.btnContainer}
            onPress={async () => {
              await getBedtimeStory();
              props.navigation.navigate('Story', {
                recommendedStory: recommendedStory,
              });
            }}>
            <Text style={styles.btntxt}>Get Your Story</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },

  uppercontainer: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 377,
    flexDirection: 'row',
  },
  bgimg: {
    width: deviceWidth,
    height: deviceHeight,
    borderRadius: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: '800',
    color: '#F5A467',
    textAlign: 'center',
    marginTop: 105,
  },
  btntxt: {
    paddingVertical: 15,
    paddingHorizontal: 45,
    borderWidth: 3,
    borderRadius: 8,
    borderColor: '#E8914E',
    marginTop: 73,
    fontSize: 16,
    color: '#00475C',
    fontWeight: '700',

    textTransform: 'uppercase',
    backgroundColor: '#ABCBD0',
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, // Adjust the marginTop as needed
  },

  intext: {
    borderWidth: 4,
    borderRadius: 8,
    borderColor: '#ABCBD0',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adjust opacity as needed
    shadowColor: '#E8914E',
    fontWeight: '700',
    marginStart: 24,
    marginEnd: 18,
    width: 170,
    color: 'black',
    height: 50,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1, // Adjust shadow opacity as needed
    shadowRadius: 8,
    elevation: 10,
    paddingHorizontal: 20, // Add padding for better visual
    marginVertical: 8, // Add margin for better visual
  },
});

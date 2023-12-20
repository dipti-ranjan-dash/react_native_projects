import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

const BedtimeStoryScreen = () => {
  const [age, setAge] = useState('');
  const [genre, setGenre] = useState('');
  const [recommendedStory, setRecommendedStory] = useState('');

  const getBedtimeStory = async () => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/text-davinci-003/completions',
        {
          prompt: `Generate a bedtime story for a ${age}-year-old child in the ${genre} genre.`,
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
    <View>
      <Text>Child's Age:</Text>
      <TextInput value={age} onChangeText={text => setAge(text)} />

      <Text>Genre Preference:</Text>
      <TextInput value={genre} onChangeText={text => setGenre(text)} />

      <Button title="Get Bedtime Story" onPress={() => getBedtimeStory()} />

      {recommendedStory && (
        <ScrollView>
          <View>
            <Text> </Text>
            <Text>Recommended Bedtime Story:</Text>
            <Text>{recommendedStory}</Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default BedtimeStoryScreen;

const styles = StyleSheet.create({});

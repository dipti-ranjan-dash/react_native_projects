import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {deviceHeight, deviceWidth} from './dimensions';
import {RouteProp, useRoute, useNavigation} from '@react-navigation/native';

type RootStackParamList = {
  Story: {recommendedStory?: string};
};

type StoryRouteProp = RouteProp<RootStackParamList, 'Story'>;

export default function Story() {
  const navigation = useNavigation();
  const route = useRoute<StoryRouteProp>();
  const recommendedStory = route.params?.recommendedStory || '';

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/images/imgbg2.png')}
          style={styles.bgimg}>
          <Text style={styles.texthead}> Your story goes like ......</Text>
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.textcon}>
                <Text selectable={true} style={styles.text}>
                  {recommendedStory}
                </Text>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    fontSize: 16,
  },
  texthead: {
    color: '#4b1b7a',
    fontSize: 24,
    fontWeight: '800',
    marginStart: 20,

    width: 280,
    marginTop: 50,
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },

  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  bgimg: {
    width: deviceWidth,
    height: deviceHeight,
    borderRadius: 20,
  },
  textcon: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Adjust opacity as needed
    height: 600,
    width: 350,
    borderWidth: 6,
    borderRadius: 8,
    padding: 5,
    marginTop: 20,
    borderColor: '#273478',
  },
});

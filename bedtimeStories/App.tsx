import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


//navigation


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//pages

import home from './src/Home'
import story from './src/Story'

export type RooStakParamList={
  Home: undefined;
  Story: {story: string}
};



const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Story" component={story} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
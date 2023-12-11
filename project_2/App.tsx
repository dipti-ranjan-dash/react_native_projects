import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Flatcard from './components/Flatcard';
import Movecards from './components/Movecards';
import ImageCard from './components/Imagecard';
import ActionCard from './components/ActionCard';

const App = () => {
  return (
    <SafeAreaView /*style={{ flex: 1, backgroundColor: '#FFFFFF' }}*/>
      <ScrollView>
      <ImageCard />
      <Movecards />
        <Flatcard />
       
        
        <ActionCard/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

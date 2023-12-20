// Import necessary components from React Native
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {deviceHeight, deviceWidth} from './Dimensions'; // Import device dimensions
import Icon from 'react-native-vector-icons/Ionicons';
import Cards from './Cards'; // Import the Cards component

// Home component definition
export default function Home(props) {
  // State for storing the city input
  const [city, setCity] = useState('');

  // Sample cities data with names and images
  const cities = [
    {
      name: 'New Delhi',
      image: require('../assets/images/delhi.png'),
    },
    {
      name: 'Bhubaneswar',
      image: require('../assets/images/bbsr.png'),
    },
    {
      name: 'Mumbai',
      image: require('../assets/images/mumbai.png'),
    },
    {
      name: 'Kolkata',
      image: require('../assets/images/kolkata.png'),
    },
    {
      name: 'Bangalore',
      image: require('../assets/images/image7.jpg'),
    },
  ];

  // Render the Home component
  return (
    <View>
      {/* Header section */}
      <View
        style={{
          position: 'absolute',
          paddingVertical: 20,
          paddingHorizontal: 10,
          backgroundColor: 'black',
        }}>
        {/* my image */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: deviceWidth - 20,
          }}>
          <Image
            source={require('../assets/images/mypic.jpg')}
            style={{height: 46, width: 46, borderRadius: 50}}
          />
        </View>

        {/* use name and content */}
        <View style={{paddingHorizontal: 20, marginTop: 100}}>
          <Text style={{fontSize: 40, color: 'white'}}>Hello dipti</Text>
          <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
            Search the city by the name
          </Text>

          {/* City search input section */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 50,
              borderWidth: 1,
              borderColor: 'white',
              marginTop: 16,
              paddingHorizontal: 10,
            }}>
            {/* input box */}

            <TextInput
              value={city}
              onChangeText={val => setCity(val)}
              placeholder="Type city name"
              placeholderTextColor="gray"
              style={{paddingHorizontal: 10, color: 'white', fontSize: 16}}
            />

            {/* search button */}

            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('Details', {name: city})
              }>
              <Text> Search </Text>
            </TouchableOpacity>
          </View>

          {/* My Locations section */}
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              paddingHorizontal: 10,
              marginTop: 220,
              marginBottom: 20,
            }}>
            My Locations
          </Text>

          {/* FlatList for rendering city cards */}
          <FlatList
            horizontal
            data={cities}
            renderItem={({item}) => (
              <Cards
                name={item.name}
                image={item.image}
                navigation={props.navigation}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}

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
import {deviceHeight, deviceWidth} from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import Cards from './Cards';

export default function Home(props) {
  const [city, setCity] = useState('');

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
      name: 'bangalore',
      image: require('../assets/images/image7.jpg'),
    },
  ];

  return (
    <View >
      
      <View
        style={{
          position: 'absolute',
          paddingVertical: 20,
          paddingHorizontal: 10,
          backgroundColor: "black"
        }}>
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

        <View style={{paddingHorizontal: 20, marginTop: 100}}>
          <Text style={{fontSize: 40, color: 'white'}}>Hello dipti</Text>
          <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
            Search the city by the name
          </Text>
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
            <TextInput
              value={city}
              onChangeText={val => setCity(val)}
              placeholder="Type city name"
              placeholderTextColor="gray"
              style={{paddingHorizontal: 10, color: 'white', fontSize: 16}}
            />
            <TouchableOpacity onPress={() => props.navigation.navigate('Details', {name: city})}>
              <Text> Search </Text>
            </TouchableOpacity>
          </View>

          <Text style={{color: 'white', fontSize: 20, paddingHorizontal: 10, marginTop: 220, marginBottom: 20}}>
            My Locations
          </Text>
          <FlatList
          horizontal
            data={cities}
            renderItem={({item}) => (
              <Cards name={item.name} image={item.image} navigation={props.navigation} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

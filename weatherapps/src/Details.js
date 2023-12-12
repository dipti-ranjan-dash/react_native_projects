import { View, Image, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native'; // Import the necessary component from React Navigation
import { deviceHeight, deviceWidth } from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import { API_KEY } from './Constants';

export default function Details(props) {
  const [data, setData] = useState();
  const { name } = props.route.params;
  const navigation = useNavigation(); // Use the useNavigation hook to get the navigation prop

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`)
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => {
        console.log(err);
        // Redirect to the home page in case of an error
        navigation.navigate('Home'); // Make sure 'Home' is the correct name of your home page route
      });
  }, [name, navigation]);

  const Data = ({ title, value }) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{ color: 'gray', fontSize: 22 }}>{title}</Text>
      <Text style={{ color: 'white', fontSize: 22 }}>{value}</Text>
    </View>
  );

  return (
    <View>
      <View
        style={{
          position: 'absolute',
          paddingVertical: 20,
          paddingHorizontal: 10,
          backgroundColor: 'black',
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
            style={{ height: 46, width: 46, borderRadius: 50 }}
          />
        </View>

        {data ? (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              height: deviceHeight - 100,
            }}>
            <View>
              <Text style={{ color: 'white', fontSize: 40 }}>{name}</Text>
              <Text style={{ fontSize: 22, color: 'white', textAlign: 'center' }}>
                {data['weather'][0]['main']}
              </Text>
            </View>

            <Text style={{ color: 'white', fontSize: 64 }}>
              {(data['main']['temp'] - 273).toFixed(2)}&deg; C
            </Text>

            <View>
              <Text style={{ color: 'white', fontSize: 22, marginBottom: 16 }}>Weather Details</Text>
              <View style={{ width: deviceWidth - 60 }}>
                <Data value={data['wind']['speed']} title="Wind" />
                <Data value={data['main']['pressure']} title="Pressure" />
                <Data value={`${data['main']['humidity']}%`} title="Humidity" />
                <Data value={data['visibility']} title="Visibility" />
              </View>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
}

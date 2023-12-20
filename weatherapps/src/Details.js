// Import necessary components from React Native
import {View, Image, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native'; // Import the necessary component from React Navigation
import {deviceHeight, deviceWidth} from './Dimensions'; // Import device dimensions
import Icon from 'react-native-vector-icons/Ionicons';
import {API_KEY} from './Constants'; // Import API key from Constants file

// Details component definition
export default function Details(props) {
  const [data, setData] = useState(); // State for storing weather data
  const {name} = props.route.params; // Extract the 'name' parameter from the home page
  const navigation = useNavigation(); // Use the useNavigation hook to get the navigation prop

  // Fetch weather data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`,
        );
        if (!response.ok) {
          // Handle non-successful responses
          throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
        // Handle the error, for example, navigate back to the home screen
        navigation.navigate('Home');
      }
    };

    fetchData();
  }, [name, navigation]);

  // Data component for displaying other weather values
  const Data = ({title, value}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{color: 'gray', fontSize: 22}}>{title}</Text>
      <Text style={{color: 'white', fontSize: 22}}>{value}</Text>
    </View>
  );

  // Render the Details component
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
            style={{height: 46, width: 46, borderRadius: 50}}
          />
        </View>

        {/* if some data is fetched */}

        {data ? (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              height: deviceHeight - 100,
            }}>
            <View>
              <Text style={{color: 'white', fontSize: 40}}>{name}</Text>

              {/* the name of city */}

              <Text style={{fontSize: 22, color: 'white', textAlign: 'center'}}>
                {data['weather'][0]['main']}
              </Text>

              {/* the Type of weather */}
            </View>

            {/* convert k to c */}

            <Text style={{color: 'white', fontSize: 64}}>
              {(data['main']['temp'] - 273).toFixed(2)}&deg; C
            </Text>

            <View>
              <Text style={{color: 'white', fontSize: 22, marginBottom: 16}}>
                Weather Details
              </Text>
              <View style={{width: deviceWidth - 60}}>
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

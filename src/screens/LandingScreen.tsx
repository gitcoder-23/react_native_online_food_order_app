import React, { useState, useReducer, useEffect } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import { useNavigation } from '../utils';

const screenWidth = Dimensions.get('screen').width;

const LandingScreen = () => {
  const { addressContainer, addressTitle, addressText } = styles;
  // navigation custom hook
  const { navigate } = useNavigation();
  const [errorMsg, setErrorMsg] = useState('');
  // Interface in useState
  const [address, setAddress] = useState<Location.LocationGeocodedAddress>();

  const [displayAddress, setDisplayAddress] = useState(
    'Waiting for Current Location'
  );

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setErrorMsg('Permission to access location is not granted');
      }
      let location: any = await Location.getCurrentPositionAsync({});
      const { coords } = location;

      if (coords) {
        const { latitude, longitude } = coords;
        // provides location
        let addressResponse: any = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });

        for (let item of addressResponse) {
          setAddress(item);
          let currentAddress = `${item.name}, ${item.street},${item.postalCode},${item.country}`;
          setDisplayAddress(currentAddress);
          if (currentAddress.length > 0) {
            setTimeout(() => {
              navigate('homeStack');
            }, 2000);
          }
          return;
        }
      } else {
        // Notify user something went wrong with location
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.navigation} />
      <View style={styles.body}>
        <Image
          source={require('../images/delivery_icon.png')}
          style={styles.deliveryIcon}
        />
        <View style={addressContainer}>
          <Text style={addressTitle}>Your Delivery Address</Text>
        </View>
        <Text style={addressText}>Waiting for Current Location</Text>
      </View>
      <View style={styles.footer} />
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(242, 242, 242, 1)',
  },
  navigation: {
    flex: 2,
    // backgroundColor: 'red',
  },
  body: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  deliveryIcon: {
    width: 120,
    height: 120,
  },
  addressContainer: {
    width: screenWidth - 100,
    borderBottomColor: 'red',
    borderBottomWidth: 0.5,
    padding: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  addressTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#7D7D7D',
  },
  addressText: {
    fontSize: 20,
    fontWeight: '200',
    color: '#4F4F4F',
  },
  footer: {
    flex: 1,
    // backgroundColor: 'cyan',
  },
});

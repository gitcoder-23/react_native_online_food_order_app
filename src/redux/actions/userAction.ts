import axios from 'axios';
import { LocationGeocodedAddress as Address } from 'expo-location';
import { Dispatch } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../../utils';

export interface UpdateLocationAction {
  readonly type: 'ON_UPDATE_LOCATION';
  payload: Address;
}

export interface UserErrorAction {
  readonly type: 'ON_USER_ERROR';
  payload: any;
}

export type UserAction = UpdateLocationAction | UserErrorAction;

// User action trigger from component
export const onUpdateLocation = (location: Address) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const locationString = JSON.stringify(location);
      await AsyncStorage.setItem('user_location', locationString);
      //  save our location inlocal storage
      dispatch({
        type: 'ON_UPDATE_LOCATION',
        payload: location,
      });
    } catch (error) {
      dispatch({
        type: 'ON_USER_ERROR',
        payload: error,
      });
    }
  };
};

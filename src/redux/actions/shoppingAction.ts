import axios from 'axios';
import { LocationGeocodedAddress } from 'expo-location';
import { Dispatch } from 'react';
import { BASE_URL } from '../../utils';
import { FoodAvailability } from '../models';

// availability Action

export interface AvailabilityAction {
  readonly type: 'ON_AVAILABILITY';
  payload: FoodAvailability;
}

export interface ShoppingErrorAction {
  readonly type: 'ON_SHOPPING_ERROR';
  payload: any;
}

export type ShoppingAction = AvailabilityAction | ShoppingErrorAction;

// trigger action from components
export const onAvailability = () => {
  return async (dispatch: Dispatch<ShoppingAction>) => {
    try {
      const response = await axios.get<FoodAvailability>(
        `${BASE_URL}/food/availability/78787878`
      );
      if (!response) {
        dispatch({
          type: 'ON_SHOPPING_ERROR',
          payload: 'Availability Error!',
        });
      } else {
        dispatch({
          type: 'ON_AVAILABILITY',
          payload: response.data,
        });
      }
    } catch (error) {
      dispatch({
        type: 'ON_SHOPPING_ERROR',
        payload: error,
      });
    }
  };
};

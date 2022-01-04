import { LocationGeocodedAddress } from 'expo-location';

// Depends upon given api
// Category model
export interface CategoryModel {
  id: number;
  title: string;
  icon: string;
}

// food model
export interface FoodModel {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  readyTime: number;
  images: [string];
}

// Resturant model
export interface ResturantModel {
  _id: string;
  name: string;
  foodType: string;
  pincode: string;
  address: string;
  phone: string;
  // images: [string];
  images: string;
  foods: [FoodModel];
}

// From Api total json
export interface FoodAvailability {
  categories: [CategoryModel];
  restaurants: [ResturantModel];
  foods: [FoodModel];
}

// {
//   "categories": [],
//   "restaurants": [],
//   "foods": []
//   }

// user model for operation custom
// for initial reducer todo: modify later
export interface UserModel {
  firstName: string;
  lastName: string;
  contactNumber: string;
  token: string;
}

// Custom
export interface UserState {
  user: UserModel;
  location: LocationGeocodedAddress;
  error: string | undefined;
}

export interface ShoppingState {
  availability: FoodAvailability;
  // Other models
}

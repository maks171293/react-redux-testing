// Import Reducer type
import { Reducer } from 'redux';
import {
  RestaurantActions,
  RestaurantActionTypes,
} from '../actions/RestaurantActions';
import {randomInteger} from '../services/helpers';
import images from '../services/images.json';

// Define the restaurant object type
export interface IRestaurant {
  formatted_address: string;
  icon: string;
  id: string;
  name: string;
  rating: number;
  types: string[];
  price_level: number;
  opening_hours: {
    isOpen: boolean;
  },
  photos: any;
}

export interface IFilters {
  type: string;
  isOpened: boolean | null;
  searchName: string;
}

// Define the Restaurant State
export interface IRestaurantState {
  readonly restaurants: IRestaurant[];
  filters: IFilters,
  city: string;
}

// Define the initial state
const initialRestaurantState: IRestaurantState = {
  restaurants: [],
  city: 'kiev',
  filters: {
    type: '',
    isOpened: null,
    searchName: '',
  }
};

export const restaurantReducer: Reducer<IRestaurantState, RestaurantActions> = (
  state = initialRestaurantState,
  action
) => {
  switch (action.type) {
    case RestaurantActionTypes.GET_ALL_SUCCESS: {
      return {
        ...state,
        restaurants: action.restaurants.map(restaurant => ({...restaurant, icon: images[randomInteger(1,90)].image }))
      };
    }
    default:
      return state;
  }
};
// Import Reducer type
import { Reducer } from 'redux';
import {
  RestaurantActions,
  RestaurantActionTypes,
  FiltersActions,
} from '../actions/RestaurantActions';
import { randomInteger } from '../services/helpers';
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
    open_now: boolean;
  },
  photos: any;
}

// Define the Restaurant State
export interface IRestaurantState {
  readonly restaurants: IRestaurant[];
  city: string;
}

// Define the initial state
const initialRestaurantState: IRestaurantState = {
  restaurants: [],
  city: 'kiev',
};

export const restaurantReducer: Reducer<IRestaurantState, RestaurantActions | FiltersActions> = (
  state = initialRestaurantState,
  action
) => {
  switch (action.type) {
    case RestaurantActionTypes.GET_ALL_SUCCESS: {
      return {
        ...state,
        // nu takoe
        restaurants: action.restaurants.map(restaurant => ({ ...restaurant, icon: images[randomInteger(1, 90)].image }))
      };
    }
    default:
      return state;
  }
};
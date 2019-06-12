// Import Reducer type
import { Reducer } from 'redux';
import {
  RestaurantActions,
  RestaurantActionTypes,
} from '../actions/RestaurantActions';

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
  }
}

// Define the Restaurant State
export interface IRestaurantState {
  readonly restaurants: IRestaurant[];
}

// Define the initial state
const initialRestaurantState: IRestaurantState = {
  restaurants: [],
};

export const restaurantReducer: Reducer<IRestaurantState, RestaurantActions> = (
  state = initialRestaurantState,
  action
) => {
  switch (action.type) {
    case RestaurantActionTypes.GET_ALL: {
      return {
        ...state,
        restaurants: action.restaurants,
      };
    }
    default:
      return state;
  }
};

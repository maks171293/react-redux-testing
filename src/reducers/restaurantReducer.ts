// Import Reducer type
import { Reducer } from 'redux';
import {
  RestaurantActions,
  RestaurantActionTypes,
  FiltersActionTypes,
  FiltersActions,
} from '../actions/RestaurantActions';
import { randomInteger } from '../services/helpers';
import images from '../services/images.json';
import { without } from 'lodash'

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

export interface IFilters {
  types: string[];
  isOpened: boolean | null;
  searchName: string;
  showAll: boolean;
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
        restaurants: action.restaurants.map(restaurant => ({ ...restaurant, icon: images[randomInteger(1, 90)].image }))
      };
    }
    default:
      return state;
  }
};

export interface IFiltersState {
  filters: IFilters;
}

const initialFiltersState: IFiltersState = {
  filters: {
    types: ['restaurant', 'bar', 'cafe', 'vegetarian'],
    isOpened: true,
    searchName: '',
    showAll: true,
  }
}

export const filtersReducer: Reducer<IFiltersState, FiltersActions> = (
  state = initialFiltersState,
  action
) => {
  switch (action.type) {
    case FiltersActionTypes.CHANGE_SEARCH_STRING: {
      return {
        ...state,
        filters: {
          ...state.filters,
          searchName: action.data
        }
      }
    }
    case FiltersActionTypes.CHANGE_TYPE: {
      const { types } = state.filters;
      const updatedTypes = types.includes(action.data) ? without(types, action.data) : types.concat(action.data);
      return {
        ...state,
        filters: {
          ...state.filters,
          types: updatedTypes
        }
      }
    }
    case FiltersActionTypes.TOGGLE_SHOW_OPENED: {
      const {filters} = state;
      return {
        ...state,
        filters: {
          ...filters,
          isOpened: action.data,
        }
      }
    }

    case FiltersActionTypes.TOGGLE_SHOW_ALL: {
      const {filters} = state;
      return {
        ...state,
        filters: {
          ...filters,
          showAll: action.data,
        }
      }
    }

    default:
      return state;
  }
};
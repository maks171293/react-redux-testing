import { combineReducers } from 'redux';
import {
  restaurantReducer,
  IRestaurantState,
} from '../reducers/restaurantReducer';
import {
  filtersReducer,
  IFiltersState,
} from '../reducers/filtersReducer';

// Create an interface for the application state
export interface IAppState {
  restaurantState: IRestaurantState;
  filtersState: IFiltersState;
}

// EXTRACT TO SEPARATE FILE
export default combineReducers<IAppState>({
  restaurantState: restaurantReducer,
  filtersState: filtersReducer,
});
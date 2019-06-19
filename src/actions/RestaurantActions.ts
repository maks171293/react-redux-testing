// Import redux types
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import * as urls from '../services/constants';

// Import Restaurant Typing
import { IRestaurant, IRestaurantState } from '../reducers/restaurantReducer';
import { IFilters, IFiltersState } from '../reducers/filtersReducer';
import { IAppState } from '../store/rootReducer';

// Create Action Constants
export enum RestaurantActionTypes {
  GET_ALL_SUCCESS = 'GET_ALL_SUCCESS',
  GET_ALL_FAILURE = 'GET_ALL_FAILURE',
}

// Interface for Get All Action Type
export interface IRestaurantGetAllSuccessAction {
  type: RestaurantActionTypes.GET_ALL_SUCCESS;
  restaurants: IRestaurant[];
}
export interface IRestaurantGetAllFailureAction {
  type: RestaurantActionTypes.GET_ALL_FAILURE;
  restaurants: IRestaurant[];
}

export interface IRestaurantParams {
  city: string;
}

/* 
Combine the action types with a union (we assume there are more)
example: export type RestaurantActions = IGetAllAction | IGetOneAction ... 
*/
export type RestaurantActions = IRestaurantGetAllSuccessAction | IRestaurantGetAllFailureAction;



/* Get All Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const getAllRestaurants: ActionCreator<
  ThunkAction<Promise<any>, IRestaurantState, IRestaurantParams, RestaurantActions>
> = (city: IRestaurantParams) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(urls.GET_RESTAURANTS_BY_CITY + city);
      dispatch({
        restaurants: response.data.results,
        type: RestaurantActionTypes.GET_ALL_SUCCESS,
      });
    } catch (err) {
      dispatch({
        type: RestaurantActionTypes.GET_ALL_FAILURE,
      })
      console.error(err);
    }
  };
};

export enum FiltersActionTypes {
  CHANGE_TYPE = 'CHANGE_TYPE',
  CHANGE_TIME_FILTER = 'CHANGE_TIME_FILTER',
  CHANGE_SEARCH_STRING = 'SEARCH_STRING',
}

export const changeFilterTypes = (typeName: string) =>({
    type: FiltersActionTypes.CHANGE_TYPE,
    data: typeName,
  })

export const changeSearchString = (searchString: string) => ({
    type: FiltersActionTypes.CHANGE_SEARCH_STRING,
    data: searchString,
  })

export const changeTimeFilter = (filter: string) => ({
  type: FiltersActionTypes.CHANGE_TIME_FILTER,
  data: filter,
})

export interface IFilterChangeTypesAction {
  type: FiltersActionTypes.CHANGE_TYPE;
  data: string;
}

export interface IFilterChangeTimeFilterAction {
  type: FiltersActionTypes.CHANGE_TIME_FILTER;
  data: string;
}

export interface IFilterChangeSearchStringAction {
  type: FiltersActionTypes.CHANGE_SEARCH_STRING;
  data: string;
}

export type FiltersActions = IFilterChangeTypesAction  | IFilterChangeSearchStringAction | IFilterChangeTimeFilterAction;

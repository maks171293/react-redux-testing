// Import redux types
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import * as urls from '../services/constants';

// Import Restaurant Typing
import { IRestaurant, IRestaurantState, IFilters } from '../reducers/restaurantReducer';
import { IAppState } from '../store/Store';

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
  TOGGLE_SHOW_ALL = 'SHOW_ALL',
  TOGGLE_SHOW_OPENED = 'SHOW_OPENED',
  CHANGE_SEARCH_STRING = 'SEARCH_STRING',
}

export const changeFilterTypes = (typeName: string) => (dispatch: Dispatch) => {
  dispatch({
    type: FiltersActionTypes.CHANGE_TYPE,
    data: typeName,
  })
}

export const toggleShowAll = (showAll: boolean) => (dispatch: Dispatch) => {
  dispatch({
    type: FiltersActionTypes.TOGGLE_SHOW_ALL,
    data: showAll,
  })
}

export const toggleShowOpened = (showOpened: boolean) => (dispatch: Dispatch) => {
  dispatch({
    type: FiltersActionTypes.TOGGLE_SHOW_OPENED,
    data: showOpened,
  })
}

export const changeSearchString = (searchString: string) => (dispatch: Dispatch) => {
  dispatch({
    type: FiltersActionTypes.CHANGE_SEARCH_STRING,
    data: searchString,
  })
}

export interface IFilterChangeTypesAction {
  type: FiltersActionTypes.CHANGE_TYPE;
  data: string;
}

export interface IFilterToggleShowAllAction {
  type: FiltersActionTypes.TOGGLE_SHOW_ALL;
  data: boolean;
}

export interface IFilterToggleShowOpenedAction {
  type: FiltersActionTypes.TOGGLE_SHOW_OPENED;
  data: boolean;
}

export interface IFilterChangeSearchStringAction {
  type: FiltersActionTypes.CHANGE_SEARCH_STRING;
  data: string;
}

export type FiltersActions = IFilterChangeTypesAction | IFilterToggleShowAllAction | IFilterChangeSearchStringAction | IFilterToggleShowOpenedAction;

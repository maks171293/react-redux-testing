// Import redux types
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import * as urls from '../services/constants';

// Import Restaurant Typing
import { IRestaurant, IRestaurantState } from '../reducers/restaurantReducer';
import { IAppState } from '../store/Store';

// Create Action Constants
export enum RestaurantActionTypes {
  GET_ALL = 'GET_ALL',
}

// Interface for Get All Action Type
export interface IRestaurantGetAllAction {
  type: RestaurantActionTypes.GET_ALL;
  restaurants: IRestaurant[];
}

export interface IRestaurantParams {
  city: string;
}

/* 
Combine the action types with a union (we assume there are more)
example: export type RestaurantActions = IGetAllAction | IGetOneAction ... 
*/
export type RestaurantActions = IRestaurantGetAllAction;



/* Get All Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const getAllRestaurants: ActionCreator<
  ThunkAction<Promise<any>, IRestaurantState, IRestaurantParams, IRestaurantGetAllAction>
> = (city: IRestaurantParams) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(urls.GET_RESTAURANTS_BY_CITY + city);
      dispatch({
        restaurants: response.data.results,
        type: RestaurantActionTypes.GET_ALL,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

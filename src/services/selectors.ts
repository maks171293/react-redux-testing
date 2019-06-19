import { intersection } from 'lodash';
import { IAppState } from '../store/rootReducer';

// USE RESELECT

export const getRestaurants = (state: IAppState) => {
    return state.restaurantState.restaurants;
}

export const getRestaurantById = (state: IAppState, id: string) => state.restaurantState.restaurants.find((item) => item.id === id);

export const getFilters = (state: IAppState) => state.filtersState.filters;

export const getSearchString = (state: IAppState) => state.filtersState.filters.searchName;

export const getSummary = (state: IAppState) => getFilteredRestaurants(state).length;

export const getFilteredRestaurants = (state: IAppState) => {
    const { searchName, types, timeFilter } = getFilters(state);
    let restaurants = getRestaurants(state);

    if(searchName.length > 0){
        restaurants = restaurants.filter((item) => {
            return item.name.toLowerCase().includes(searchName.toLowerCase());
        });
    }
    
    if(types.length > 0){
        restaurants = restaurants.filter((item) => intersection(item.types, types).length > 0)
    }
    if(timeFilter !== 'showAll'){
        if(timeFilter === 'isOpened'){
            restaurants = restaurants.filter((item) => {
                return item.opening_hours && item.opening_hours.open_now
            })
        }else {
            restaurants = restaurants.filter((item) => {
                return !item.opening_hours || !item.opening_hours.open_now
            })
        }
    }
    return restaurants;
}
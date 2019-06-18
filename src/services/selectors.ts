import { intersection } from 'lodash';
import { IAppState } from '../store/Store';

export const getRestaurants = (state: IAppState) => {
    return state.restaurantState.restaurants;
}

export const getRestaurantById = (state: IAppState, id: string) => {
    return state.restaurantState.restaurants.find((item) => item.id === id)
}

export const getFilters = (state: IAppState) => {
    return state.filtersState.filters;
}

export const getSearchString = (state: IAppState) => {
    return state.filtersState.filters.searchName
}

export const getFilteredRestaurants = (state: IAppState) => {
    const { searchName, types, showAll, isOpened } = getFilters(state);
    let restaurants = getRestaurants(state);
    if(searchName.length > 0){
        restaurants = restaurants.filter((item) => {
            return item.name.startsWith(searchName);
        });
    }
    if(types.length > 0 && types.length < 4){
        restaurants = restaurants.filter((item) => {
            return intersection(item.types, types).length > 0
        })
    }
    if(!showAll){
        if(isOpened){
            restaurants = restaurants.filter((item) => {
                console.log('item',item);
                return item.opening_hours && item.opening_hours.open_now
            })
        }else {
            restaurants = restaurants.filter((item) => {
                console.log('item',item);
                return !item.opening_hours || !item.opening_hours.open_now
            })
        }
    }
    return restaurants;
}
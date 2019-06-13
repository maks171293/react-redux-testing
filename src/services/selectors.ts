import { IAppState } from '../store/Store';
export const getRestaurants = (state: IAppState) => {
    return state.restaurantState.restaurants
}

export const getRestaurantById = (state: IAppState, id: string) => {
    return state.restaurantState.restaurants.find((item) => item.id === id)
}
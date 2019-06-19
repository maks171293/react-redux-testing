import { Reducer } from 'redux';
import { without } from 'lodash'
import {
  FiltersActionTypes,
  FiltersActions,
} from '../actions/RestaurantActions';

export interface IFilters {
  types: string[];
  searchName: string;
  timeFilter: string;
}

export interface IFiltersState {
  filters: IFilters;
}

const initialFiltersState: IFiltersState = {
  filters: {
    types: ['restaurant', 'bar', 'cafe', 'vegetarian'],
    searchName: '',
    timeFilter: 'isClosed',
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
    case FiltersActionTypes.CHANGE_TIME_FILTER: {
      const { filters } = state;
      return {
        ...state,
        filters: {
          ...filters,
          timeFilter: action.data,
        }
      }
    }

    default:
      return state;
  }
};
import * as React from 'react';
import { connect } from 'react-redux';

import ListItem from '../components/ListItem';

import { IAppState } from '../store/Store';
import { getRestaurants, getSearchString, getFilteredRestaurants } from '../services/selectors';
import { IRestaurant } from '../reducers/restaurantReducer';

interface IProps {
  restaurants: IRestaurant[];
  searchString: string;
  filteredRestaurants: IRestaurant[];
}

class RestaurantList extends React.Component<IProps> {
  public render() {
    const { filteredRestaurants } = this.props;
    return (
      <div className="page-container">
        {filteredRestaurants.map((restaurant: IRestaurant) => {
          return <ListItem key={restaurant.name} name={restaurant.name} address={restaurant.formatted_address} icon={restaurant.icon} rating={restaurant.rating}/>
        })}
      </div>
    );
  }
}

const mapStateToProps = (store: IAppState) => {
  return {
    restaurants: getRestaurants(store),
    searchString: getSearchString(store),
    filteredRestaurants: getFilteredRestaurants(store),
  };
};

export default connect(mapStateToProps)(RestaurantList);

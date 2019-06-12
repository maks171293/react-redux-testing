import * as React from 'react';
import { connect } from 'react-redux';

import { IAppState } from '../store/Store';

import { IRestaurant } from '../reducers/restaurantReducer';

// Create the containers interface
interface IProps {
  restaurants: IRestaurant[];
}

class RestaurantList extends React.Component<IProps> {
  public render() {
    const { restaurants } = this.props;
    return (
      <div className="page-container">
        {restaurants.map((restaurant: IRestaurant) => {
          return <span key={restaurant.name}>{restaurant.name}</span>;
        })}
      </div>
    );
  }
}

// Grab the restaurants from the store and make them available on props
const mapStateToProps = (store: IAppState) => {
  return {
    restaurants: store.restaurantState.restaurants,
  };
};

export default connect(mapStateToProps)(RestaurantList);

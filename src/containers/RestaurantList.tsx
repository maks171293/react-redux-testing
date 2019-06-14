import * as React from 'react';
import { connect } from 'react-redux';

import ListItem from '../components/ListItem';

import { IAppState } from '../store/Store';
import { getRestaurants } from '../services/selectors';
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
          return <ListItem name={restaurant.name} address={restaurant.formatted_address} icon={restaurant.icon}/>
        })}
      </div>
    );
  }
}

// Grab the restaurants from the store and make them available on props
const mapStateToProps = (store: IAppState) => {
  return {
    restaurants: getRestaurants(store),
  };
};

export default connect(mapStateToProps)(RestaurantList);

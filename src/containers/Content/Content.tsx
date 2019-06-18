import * as React from 'react'
import { connect } from 'react-redux'
import RestaurantList from '../RestaurantList';
import CircularProgress from '@material-ui/core/CircularProgress';
import { IAppState } from '../../store/Store';
import { IRestaurant } from '../../reducers/restaurantReducer';
import { getRestaurants, getFilteredRestaurants } from '../../services/selectors';
import styles from './Content.module.scss';

interface IProps {
  restaurants: IRestaurant[];
  filteredRestaurants: IRestaurant[];
}

export class Content extends React.Component<IProps> {
  public render() {
    const { filteredRestaurants, restaurants } = this.props;
    return (
      <div className={styles.Content_root}>
        <h3>Restaurants Found {filteredRestaurants.length}</h3>
        {restaurants.length === 0 && <CircularProgress />}
        <RestaurantList />
      </div>
    )
  }
}

const mapStateToProps = (state: IAppState) => ({
    restaurants: getRestaurants(state),
    filteredRestaurants: getFilteredRestaurants(state),
})

export default connect(mapStateToProps)(Content)

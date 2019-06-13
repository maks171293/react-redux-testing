import * as React from 'react'
import { connect } from 'react-redux'
import RestaurantList from '../RestaurantList';
import { IAppState } from '../../store/Store';
import { IRestaurant } from '../../reducers/restaurantReducer';
import { getRestaurants } from '../../services/selectors';
import styles from './Content.module.scss';

interface IProps {
  restaurants: IRestaurant[];
}

export class Content extends React.Component<IProps> {
  public render() {
    const {restaurants} = this.props;
    return (
      <div className={styles.Content_root}>
        <h3>Restaurants Found {restaurants.length}</h3>
        <RestaurantList />
      </div>
    )
  }
}

const mapStateToProps = (state: IAppState) => ({
    restaurants: getRestaurants(state),
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
// export default Content;

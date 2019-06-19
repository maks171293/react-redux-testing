import * as React from 'react'
import { connect } from 'react-redux'
import RestaurantList from '../../containers/RestaurantList';
import CircularProgress from '@material-ui/core/CircularProgress';
import { IAppState } from '../../store/rootReducer';
import { IRestaurant } from '../../reducers/restaurantReducer';
import { getRestaurants, getSummary } from '../../services/selectors';
import styles from './Content.module.scss';

interface IProps {
  restaurants: IRestaurant[];
  summary: number;
}

export class Content extends React.Component<IProps> {
  public render() {
    const { restaurants, summary } = this.props;
    return (
      <div className={styles.Content_root}>
        <h3>Restaurants Found {summary}</h3>
        {restaurants.length === 0 && <CircularProgress />}
        <RestaurantList />
      </div>
    )
  }
}

export default Content;

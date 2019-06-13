import * as React from 'react'
import { connect } from 'react-redux'
import { IAppState } from '../../store/Store';
import { IRestaurant } from '../../reducers/restaurantReducer';
import { getRestaurants } from '../../services/selectors';
import styles from './SideBar.module.scss';

interface IProps {
  restaurants: IRestaurant[];
}

export class SideBar extends React.Component<IProps> {
  public render() {
    return (
      <div className={styles.SideBar}>
        <p>lalalal</p>
      </div>
    )
  }
}

const mapStateToProps = (state: IAppState) => ({
    restaurants: getRestaurants(state),
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
// export default SideBar;

import * as React from 'react';
import { connect } from 'react-redux'
import SideBar from '../../components/SideBar/SideBar';
import Content from '../../components/Content/Content';
import styles from './MainPage.module.scss';
import { Container } from '@material-ui/core';
import { changeSearchString, changeFilterTypes, changeTimeFilter } from '../../actions/RestaurantActions';
import { getRestaurants, getSummary, getFilteredRestaurants } from '../../services/selectors';
import { IAppState } from '../../store/rootReducer';
import { IRestaurant } from '../../reducers/restaurantReducer';

export interface IMainPageProps {
  restaurants: IRestaurant[];
  filteredRestaurants: IRestaurant[];
  summary: number;
  changeSearchString: (value: string) => void;
  changeFilterTypes: (value: string) => void;
  changeTimeFilter: (value: string) => void;
}

class MainPage extends React.Component<IMainPageProps> {
  render() {
    const { 
      restaurants,
      summary,
      changeSearchString,
      changeFilterTypes,
      changeTimeFilter } = this.props;
    return (
      <div className={styles.MainPage_root}>
        <Container maxWidth="md" className={styles.MainPage_root}>
          <SideBar
            restaurants={restaurants}
            changeSearchString={changeSearchString}
            changeFilterTypes={changeFilterTypes}
            changeTimeFilter={changeTimeFilter} />
          <Content restaurants={restaurants} summary={summary} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state: IAppState) => ({
  restaurants: getRestaurants(state),
  filteredRestaurants: getFilteredRestaurants(state),
  summary: getSummary(state),
})

const mapDispatchToProps = {
  changeSearchString,
  changeFilterTypes,
  changeTimeFilter,
}

// wrong redux subscription
// smart (this one) component should be on top of dummy (SideBar, Content) ones
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

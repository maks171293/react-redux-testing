import * as React from 'react';
import '../App.scss';
import Header from './Header/Header';

import RestaurantList from '../containers/RestaurantList';
import MainPage from '../containers/MainPage/MainPage';

class App extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <MainPage />
      </>
    );
  }
}

export default App;

import * as React from 'react';
import '../App.css';
import Header from './Header/Header';

import RestaurantList from '../containers/RestaurantList';
class App extends React.Component {
  render() {
    return (
      <>
        <Header/>
          <h1>The Force Awakens</h1>
        <RestaurantList />
      </>
    );
  }
}

export default App;

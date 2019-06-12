import * as React from 'react';
import '../App.css';

import RestaurantList from '../containers/RestaurantList';
class App extends React.Component {
  render() {
    return (
      <>
        <h1>The Force Awakens</h1>
        <RestaurantList />
      </>
    );
  }
}

export default App;

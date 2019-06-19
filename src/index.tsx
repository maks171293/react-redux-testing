import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

import { Provider } from 'react-redux';

import { Store } from 'redux';

import configureStore from './store/Store';
import {IAppState} from './store/rootReducer';
import { getAllRestaurants } from './actions/RestaurantActions';

import './index.css';
import App from './components/App';

interface IProps {
  store: Store<IAppState>;
}

const Root: React.SFC<IProps> = props => {
  return (
    <Provider store={props.store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  );
};

// Generate the store
const store = configureStore();
store.dispatch(getAllRestaurants("kiev"));

ReactDOM.render(<Root store={store} />, document.getElementById(
  'root'
) as HTMLElement);

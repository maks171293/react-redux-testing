import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import theme from './theme';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

/* Make the store available to all container 
components in the application without passing it explicitly */
import { Provider } from 'react-redux';

// Store type from Redux
import { Store } from 'redux';

// Import the store function and state
import configureStore, { IAppState } from './store/Store';
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

// Render the App
ReactDOM.render(<Root store={store} />, document.getElementById(
  'root'
) as HTMLElement);

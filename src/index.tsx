import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

export type AppState = ReturnType<typeof rootReducer>;

const theme = createMuiTheme({
  palette: {
    primary: { main: '#00bcd4', contrastText: '#fff' }
  }
});

const store = createStore(rootReducer);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <Provider store={store}>
        <App />
      </Provider>
    </CssBaseline>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

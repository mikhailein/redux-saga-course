import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './pages/App';
import { store } from './redux';
import { Router } from 'react-router-dom'
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
import { history } from './redux/reducers';
import { ConnectedRouter } from 'connected-react-router';

ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path='/' exact>
            <App />
          </Route>
          <Route path='/blog' exact>
            <Blog />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </ConnectedRouter>
    </Provider>,
  document.getElementById('root')
);


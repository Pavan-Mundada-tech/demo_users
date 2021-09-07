import React from 'react';
import {Provider} from 'react-redux';
import store from '../demo_users/src/redux/store';

import UsersContainer from './src/components/UsersContainer';

function App() {
  return (
    <Provider store={store}>
      <UsersContainer />
    </Provider>
  );
}

export default App;

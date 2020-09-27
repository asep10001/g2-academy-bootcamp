import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {
  persistStore,
  persistReducer,
  persistCombineReducers,
} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-community/async-storage';
import App from './App';
import allReducers from './reducers';
import { SQLite3 } from './config/index';
import { SQLiteContext } from './config/index';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistCombineReducers(persistConfig, allReducers);

let store = createStore(persistedReducer);
let persistor = persistStore(store);
class indexApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SQLiteContext.Provider value={new SQLite3()}>
            <App />
          </SQLiteContext.Provider>
        </PersistGate>
      </Provider>
    );
  }
}

export default indexApp;

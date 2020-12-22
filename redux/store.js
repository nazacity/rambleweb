import { createStore, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import rootReducer from './rootReducers';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'primary',
  storage: storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['navigation'],
};

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

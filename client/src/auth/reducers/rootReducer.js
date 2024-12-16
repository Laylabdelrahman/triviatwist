// src/reducers/rootReducer.js
import { combineReducers } from 'redux';
import userReducer from './userReducer'; // Now import the userReducer correctly
import storage from 'redux-persist/lib/storage'; // Default localStorage
import { persistReducer } from 'redux-persist';

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
};

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer, // Using the imported userReducer
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;

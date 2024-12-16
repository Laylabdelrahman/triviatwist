import { configureStore } from '@reduxjs/toolkit'; // import configureStore from Redux Toolkit
import userReducer from './reducers/rootReducer'; 
import storage from 'redux-persist/lib/storage'; // Use localStorage (or sessionStorage) as default storage
import { persistStore, persistReducer } from 'redux-persist';

// Initial states (if needed, otherwise can be omitted as Redux Toolkit initializes it automatically)
const initialStates = {}; 
const middlewares = []; // No need to apply middleware separately in Redux Toolkit

// Persist config
const persistConfig = {
  key: 'root', // The key to identify the persisted state in localStorage
  storage,     // You can use sessionStorage instead if preferred: import storageSession from 'redux-persist/lib/storage/session'
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, userReducer);

// Create store with persisted reducer
const store = configureStore({
  reducer: persistedReducer, // Use the persisted reducer
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // Default middleware (redux-persist uses it)
  preloadedState: initialStates, // Set initial state if required
});

// Create persistor for redux-persist
const persistor = persistStore(store);

// Export both store and persistor
export { store, persistor };

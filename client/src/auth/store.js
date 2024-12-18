import { configureStore } from '@reduxjs/toolkit'; // import configureStore from Redux Toolkit
import { thunk } from "redux-thunk"; 
import { sessionService } from 'redux-react-session'; // Import sessionService
import rootReducer from "./reducers/rootReducer";

// Create store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

// Initialize session service
sessionService.initSessionService(store);

// Export the store
export default store;

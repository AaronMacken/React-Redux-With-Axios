import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};
const middleware = [thunk];

// we use the createStore and applyMiddleware functions given to us from redux
// create store initializes the store for your provider component in the App.js file
// it takes as parameters: rootReducer, initialState, and applyMiddleware
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// rootReducer - a reducer is a file that has a bunch of JavaScript logic for managing state
// in here we can do things like filtering items out of a state array, add new items to a state array, ect.
// reducers are typically files for a specific type of application state
// so if you have an application that has a bunch of users, and those users all have a shopping list
// you would have a reducer file for users, and a reducer file for shopping list items (for a specific user)
// you combine the multiple reducer files into a "rootReducer" so that the store has access to all
// of the reducer functionality, available from one file

// initialState - this is the initial state of your application, for our application example above
// your state would probably look like an empty array of users (who will in the future fill that array)

// applyMiddleware - apply middleware allows us to write middleware that can be used to make API calls (get data from servers)
// middleware like this that is applied to redux functions are called "thunks"

// make store available to other files (imported in App.js and passed to the provider component as a prop)
export default store;

// see reducers/index.js for explanation on creating rootReducer

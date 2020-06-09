import { combineReducers } from "redux";
import postReducer from "./postReducer";

// since this file is called "index.js" when we are requiring it in the Store.js by default
// index.js is a special file name that many programming languages will realize is the "default file"
// in the store we write -- import rootReducer from "./reducers" --
// Javascript recognizes "./reducers" as the same thinga s writing "./reducers/index.js"
// for the reasons listed above

// this is where we would combine our multiple reducers by using the combineReducers
// function from redux, it takes an object as a parameter, which is a list of reducers
// we are passing to it a postReducer (which we will create next) and we are naming it "posts"

export default combineReducers({
  posts: postReducer,
});

// go to the reducers/postReducer.js for explanation on creating this reducer file

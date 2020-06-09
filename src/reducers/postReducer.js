// this post reducer will run a function on the application's state based
// off of which action was sent in

// There are two parts to actions
// 1. We create a file named types, where we create a bunch of constant variables that points
// to the string value of that action. We're essentially naming our actions by doing this.
// So in the switch statement of a reducer file, it evaluates the action.type "name"
//  and runs an action "function" based off of which switch statement corresponds
// 2. The action itself, which we will put in related files. Since this app is
// dealing with a bunch of posts, we ahve a postActions file
// if we had users, we would similarly have a usersAction file
// The action file essentially calls the dispatch function & brings with it the
// action.type ("name") and the action.payload (the data necessary to run the logic in this reduer file)
// see actions/postActions.js for more explanation on this

import {
  FETCH_POSTS,
  NEW_POST,
  UPDATE_POST,
  DELETE_POST,
} from "../actions/types";

// create the initial state for this reducer
const initialState = {
  items: [],
};

// main function for the reducer, takes a param of state which initializes to the default state
// object we created above
// it also takes an action
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    case NEW_POST:
      console.log("Reducing - New Post");
      return {
        ...state,
        // item: action.payload,
        items: [action.payload, ...state.items],
      };
    case UPDATE_POST:
      console.log("Reducing - Update Post");
      let updatedArray = state.items.map((item) => {
        if (item.id == action.payload.id) {
          item.email = action.payload.email;
        }
        return item;
      });
      console.log(action.payload);
      return {
        ...state,
        items: updatedArray,
      };
    case DELETE_POST:
      console.log("Reducing - Delete Post");

      let filteredArray = state.items.filter((item) => {
        return item.id !== action.payload;
      });

      return {
        ...state,
        items: filteredArray,
      };

    default:
      return state;
  }
}

// these are just some constant variables that we will export to our reducer

export const FETCH_POSTS = "FETCH_POSTS";
export const NEW_POST = "NEW_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";

// They will tell the reducer which function to run, based off of
// which action type was sent to the reducer
// we create these variables for them because we would have to manually type in
// the string value other wise

// this is important for one main reason

// if we want to change the string value of the action, we would have to manually go in
// and retype the string value for each reducer that uses it.
// if we have 100+ functions in our reducer file that uses an action, we'd ahve to retype
// the string value of that action 100+ times . . .

// by making variables, we can change the value of it in one place (this file) and the
// string value will be updated and each reducer will be updated accordingly.

import { FETCH_POSTS, NEW_POST, UPDATE_POST, DELETE_POST } from "./types";
import Axios from "axios";
const url = "https://reqres.in/api/users";

// export const fetchPosts = () => (dispatch) => {
//   const getData = async () => {
//     try {
//       let res = await Axios.get(url);
//       dispatch({
//         FETCH_POSTS,
//         payload: res.data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   getData();
// };

// this syntax can be cleaned up with ES6, the above function is exactly the same

// This function will be made available to our UI components
// when a UI component runs this function, it will then run ANOTHER function . . .
// then runs an async function . . . (weird I know)

// The important part is the dispatch param in the second function
// inside of this I am running an async function that will make an API call
// once the api call is complete, we call dispatch, and pass to it an object
// this object always takes an action type, this is how we tell the reducer which
// switch statement to use
// also if we are sending some data along with it, we will include that in the object
// with the name of payload

// this is essentially a complicated way of telling our reducer which function to run
// and what data it needs to have when it is running that function

export function fetchPosts() {
  return function (dispatch) {
    const getData = async () => {
      try {
        console.log("fetching");
        let res = await Axios.get(url);
        console.log(res.data);
        dispatch({
          type: FETCH_POSTS,
          payload: res.data.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  };
}

export function addNewPost(itemData) {
  return function (dispatch) {
    const addPost = async () => {
      try {
        console.log("fetching..");
        let res = await Axios.post(url, itemData);
        console.log("dispatching");
        let postData = {
          email: res.data.title,
          first_name: res.data.body,
        };
        dispatch({
          type: NEW_POST,
          payload: postData,
        });
      } catch (error) {
        console.log(error);
      }
    };
    addPost();
  };
}

export function updatePost(postId, updateData) {
  return function (dispatch) {
    const updateRequest = async () => {
      try {
        console.log("requesting...");
        let res = await Axios.put(`${url}/${postId}`, updateData);
        let payloadWithData = {
          id: postId,
          email: res.data.email,
        };
        console.log(`Response: ${res.data.email}`);
        dispatch({
          type: UPDATE_POST,
          payload: payloadWithData,
        });
      } catch (error) {
        console.log(error);
      }
    };
    updateRequest();
  };
}

export function deletePost(postId) {
  return function (dispatch) {
    const deleteRequest = async () => {
      try {
        console.log("fetching...");
        let res = await Axios.delete(`${url}/${postId}`);
        console.log(res);
        dispatch({
          type: DELETE_POST,
          payload: postId,
        });
      } catch (error) {
        console.log(error);
      }
    };
    deleteRequest();
  };
}

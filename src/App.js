import React from "react";
import "./App.css";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import { Provider } from "react-redux";
import store from "./Store";

function App() {
  return (
    // Provider connects react to redux, we provide to it a store
    // the store is what holds the redux application level state

    <Provider store={store}>
      <div className="App">
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;

// go see the Store.js for further explanation on how to create this store

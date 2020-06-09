import React, { Component } from "react";
import EditPost from "./EditPost";
import { connect } from "react-redux";
import { fetchPosts, deletePost } from "../actions/postActions";
import PropTypes from "prop-types";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const postItems = this.props.posts.map((post) => (
      <div key={post.id}>
        <h3>{post.email}</h3>
        <p>
          {post.first_name} - {post.last_name}
        </p>
        <EditPost name={`${post.first_name} ${post.last_name}`} id={post.id} />
        <button onClick={() => this.props.deletePost(post.id)}>Delete</button>
      </div>
    ));

    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

// connect the react component to the redux store
// this component needs to be able to get posts so we will use that action as the second param
// the first set of parenthesis will map Redux State to Props (MapStateToProps)
// the second will map any dispatches to props (MapDispatchToProps) - make a redux function available as props to this component

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item,
});

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, { fetchPosts, deletePost })(Posts);

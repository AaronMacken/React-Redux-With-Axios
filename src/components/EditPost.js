import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updatePost } from "../actions/postActions";

export class EditPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  resetForm() {
    this.setState({
      email: "",
    });
  }

  handleSubmit() {
    let updateData = {
      email: this.state.email,
    };
    this.props.updatePost(this.props.id, updateData);
    this.resetForm();
  }

  render() {
    return (
      <React.Fragment>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target={`#modal${this.props.id}`}
        >
          Edit Email
        </button>

        <div
          className="modal fade"
          id={`modal${this.props.id}`}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          onClick={this.resetForm.bind(this)}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit {this.props.name}'s Email
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  onClick={this.resetForm.bind(this)}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* INPUT */}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={this.resetForm.bind(this)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => this.handleSubmit()}
                  data-dismiss="modal"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

EditPost.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  updatePost: PropTypes.func.isRequired,
};

export default connect(null, { updatePost })(EditPost);

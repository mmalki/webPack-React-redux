// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle,deleteArticle } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
      
      addArticle: article => dispatch(addArticle(article)),
      deleteArticle: ()=> dispatch(deleteArticle())
  };
}
class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleChange(event) {
      console.log(event.target);
      
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    const forbiddenWords = ['spam', 'money'];
   
    this.props.addArticle({ title, id });
    this.setState({ title: "" });
  }
  handleOnClick(event) {
    event.preventDefault();
    this.props.deleteArticle();
    this.setState({ title: "" });
  }
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
        <div><br></br></div>
        <button type="button" className="btn btn-success btn-lg" onClick={this.handleOnClick}>
          Delete
        </button>
      </form>
    );
  }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;
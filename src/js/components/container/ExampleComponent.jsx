import React, { Component } from 'react'
import ReactDOM from 'react-dom'

///https://www.valentinog.com/blog/redux/
class ExampleComponent  extends Component {
    constructor(props) {
        super(props);
        this.state = { articles: [
            { title: "React Redux Tutorial for Beginners", id: 1 },
            { title: "Redux e React: cos'è Redux e come usarlo con React", id: 2 }]}
    }
    render() { 
        const {articles}  = this.state;
        return (<ul>{articles.map(el => <li key={el.id}>{el.title}</li>)}</ul>);
    }
}
 
export default ExampleComponent ;

const wrapper1 = document.getElementById("create-article-form");
wrapper1 ? ReactDOM.render(<ExampleComponent />, wrapper1) : false;
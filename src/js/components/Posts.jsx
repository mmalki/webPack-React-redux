import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux'
import {
    getData
} from '../actions/index.js'


function mapDispatchToProps(dispatch) {
    return {
        getData: () => dispatch(getData())
    };
  }
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        // calling the new action creator
        this.props.getData();
    }

    render() {
        return ( 
      <ul className="list-group list-group-flush">
        {this.props.articles.map(el => (
          <li className="list-group-item" key={el.id}>
            {el.title}
          </li>
        ))}
      </ul>);
    }
}
function mapStateToProps(state) {
    return {
      articles: state.remoteArticles.slice(0,10)
    };
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(Post);
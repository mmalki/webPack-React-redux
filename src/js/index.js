import React, { PureComponent } from 'react'
import ReactDOM  from 'react-dom';
import _ from 'lodash'
import { Provider } from 'react-redux'//impro
import store from './store/index'
import App from './components/App.jsx';
import {addArticle} from  './actions/index'

console.log(store.getState());

store.dispatch(addArticle({title:'my seconde article in store redux' , id:2}))

ReactDOM.render(<Provider store={store}>
    <App/>
    </Provider>, document.getElementById("root"));



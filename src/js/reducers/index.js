import {
    ADD_ARTICLE,
    DELETE_ARTICLE,
    FOUND_BAD_WORD
} from '../constantes/action-types';
import _ from 'lodash';

const initialState = {
    articles: []
};

function rootReducer(state = initialState, action) {
    console.log(action);
    if (ADD_ARTICLE == action.type) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
        //state.articles.push(action.payload);
    } else if (action.type == DELETE_ARTICLE) {
         state.articles =  _.drop(state.articles);
         return Object.assign({}, state, state.articles);
    }else if(FOUND_BAD_WORD == action.type){
        console.log(FOUND_BAD_WORD);
    }
    return state;
};
export default rootReducer;
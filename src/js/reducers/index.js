import {
    ADD_ARTICLE,
    DELETE_ARTICLE,
    FOUND_BAD_WORD,
    DATA_LOADED
} from '../constantes/action-types';
import _ from 'lodash';

const initialState = {
    articles: [],
    remoteArticles: []
};

function rootReducer(state = initialState, action) {
    console.log(action);
    if (ADD_ARTICLE === action.type) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
        //state.articles.push(action.payload);
    }if (action.type === DELETE_ARTICLE) {
         state.articles =  _.drop(state.articles);
         return Object.assign({}, state, state.articles);
    }if(FOUND_BAD_WORD === action.type){
        console.log(FOUND_BAD_WORD);
    }
    
    if (action.type === DATA_LOADED) {
        return Object.assign({}, state, {
          remoteArticles: state.remoteArticles.concat(action.payload)
        });
      }
    return state;
};
export default rootReducer;
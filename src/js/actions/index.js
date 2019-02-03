import {ADD_ARTICLE,DELETE_ARTICLE} from '../constantes/action-types';
export function  addArticle(payload){
    return {type:ADD_ARTICLE, payload};
}

export function deleteArticle(){
    return {type: DELETE_ARTICLE}
}
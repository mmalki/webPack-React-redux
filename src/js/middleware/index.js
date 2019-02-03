
import {ADD_ARTICLE,FOUND_BAD_WORD}  from "../constantes/action-types";

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({dispatch}){
    return function (next){
        return function (action){
            if(action.type == ADD_ARTICLE){
                const foundWord =  _.filter(forbiddenWords, (e)=>{
                    return action.payload.title.includes(e);
                })
                if(foundWord.length){
                    return dispatch({ type: FOUND_BAD_WORD });
                }
            }
            return next(action);
        }
    }
}
import {
    ADD_ARTICLE,
    DELETE_ARTICLE,DATA_LOADED
} from '../constantes/action-types';
export function addArticle(payload) {
    return {
        type: ADD_ARTICLE,
        payload
    };
}

export function deleteArticle() {
    return {
        type: DELETE_ARTICLE
    }
}

export function getData2() {
    return function(dispatch) {
      return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "DATA_LOADED", payload: json });
        });
    };
  }

  export function getData() {
    return { type: "DATA_REQUESTED" };
  }
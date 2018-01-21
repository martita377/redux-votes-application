const actions = require("./actions");
const redux = require('redux');

const reducer = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_COMMENT:
      return [{
        id: action.id,
        text: action.text,
        votes: 0
      }
      , ...state.comments];

    case actions.REMOVE_COMMENT:
      return state.comments.filter(comment => comment.id !== action.id);

    case actions.EDIT_COMMENT:
      return state.map( comment => {
        if (comment.id === action.id) {
          comment.text = action.text;
        } 
        return comment
      });
       
    case actions.THUMB_UP_COMMENT:
      return state.map(comment => {
          if (comment.id === action.id) {
              return { ...comment, votes: comment.votes + 1 }
          }
          return current
      });
      


    case actions.THUMB_DOWN_COMMENT:
      return state.map(comment => {
          if (comment.id === action.id) {
              return { ...comment, votes: comment.votes - 1 }
          }
          return comment
      });   

    default:
      return state;
  }

}

module.exports = {
    reducer,
}
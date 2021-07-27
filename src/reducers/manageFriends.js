export function manageFriends(state = {friends: []}, action){
    switch(action.type) {

      case "ADD_FRIEND":
          return ({...state, friends: [...state.friends,action.friend]})
      case "REMOVE_FRIEND":
          let friend = state.friends.findIndex(f => f.id === action.id)
          return (
              {...state, friends: [...state.friends.slice(0, friend), ...state.friends.slice(friend + 1)]}
          )
        default:
          return state;
      }



}

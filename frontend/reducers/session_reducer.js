import * as Session from '../actions/session_actions';
import merge from 'lodash/merge';

const _defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case Session.RECEIVE_CURRENT_USER:
      const newState = merge({}, state, action.currentUser);
      return newState;
    case Session.RECEIVE_ERRORS:
      return merge({}, state, action.errors);
    default:
      return state;
  }
};

export default SessionReducer;

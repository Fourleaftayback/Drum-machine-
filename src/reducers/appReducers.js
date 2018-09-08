import { BOARD_ON, BOARD_OFF, VOLUME, BOARD_A, BOARD_B, MESSAGE } from '../actions/appActions';
import { initialState } from './myState';


const boardControl = function(state = initialState, action) {
  switch(action.type) {
    case BOARD_ON:
     return Object.assign({}, state, {boardOn: true});
    case BOARD_OFF:
     return Object.assign({}, state, {boardOn: false});
    case VOLUME:
     return Object.assign({}, state, {volume: action.payload});
    case BOARD_A:
     return Object.assign({}, state, {boardTypeB: false, currentMessage: 'Kit One'});
    case BOARD_B:
     return Object.assign({}, state, {boardTypeB: true, currentMessage: 'Kit Two'});
    case MESSAGE:
     return Object.assign({}, state, {currentMessage: action.payload});
    default:
    return state;
  }
}



export default boardControl;

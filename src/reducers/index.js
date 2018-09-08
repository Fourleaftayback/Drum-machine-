import { combineReducers } from 'redux';
import boardControl from './appReducers';

export default combineReducers({
  board: boardControl
});

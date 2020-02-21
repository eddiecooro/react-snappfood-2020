import quiz from "./quiz";
import { combineReducers } from 'redux';
import level from "./level";
import person from "./person";

export default combineReducers({
    quiz,
    level,
    person
});

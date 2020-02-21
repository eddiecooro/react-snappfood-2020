import { UPDATE_PERSON, RESET } from '../constants/actionTypes';

const initialState = {
  score: 0,
  rightAnswers: 0,
  wrongAnswers: 0,
  noAnswers: 0
};

const person = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PERSON: {
      return {
        ...state,
        ...action.person
      };
    }
    case RESET: {
      return initialState;
    }
    default:
      return state;
  }
};

export default person;

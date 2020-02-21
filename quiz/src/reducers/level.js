import { NEXT_LEVEL, FINISH_QUIZ, RESET } from '../constants/actionTypes';

const initialState = {
  currentLevel: 0,
  isFinished: false,
  levels: 4
};

const level = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_LEVEL:
      return {
        ...state,
        currentLevel: state.currentLevel + 1
      };
    case FINISH_QUIZ:
      return {
        ...state,
        isFinished: true
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default level;

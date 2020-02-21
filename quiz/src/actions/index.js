import {
  FINISH_QUIZ,
  NEXT_LEVEL,
  RESET,
  UPDATE_PERSON
} from '../constants/actionTypes';

export const updatePerson = person => ({
  type: UPDATE_PERSON,
  person
});

export const nextLevel = () => ({
  type: NEXT_LEVEL
});

export const finishQuiz = () => ({
  type: FINISH_QUIZ
});

export const reset = () => ({
  type: RESET
});

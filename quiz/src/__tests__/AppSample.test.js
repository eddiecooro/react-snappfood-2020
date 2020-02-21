import Question from "../question";
import reducers from "../reducers";
import React from 'react';
import { createStore } from 'redux'
import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'

const initialState =  {
    person: {
        score:0,
        rightAnswers:0,
        wrongAnswers:0,
        noAnswers:0,
    },
    level: {
        currentLevel: 0,
        isFinished: false,
        levels: 0
    },
    quiz: {
        questions: [
            {
                title:'سوال 1',
                options:[
                    {
                        key:1,
                        title: 'گزینه 1'
                    },
                    {
                        key:2,
                        title: 'گزینه 2'
                    },
                    {
                        key:3,
                        title: 'گزینه 3'
                    },
                    {
                        key:4,
                        title: 'گزینه 4'
                    }],
                answerKey:1,
                score:100
            },
        ]
    }
};
function renderWithRedux(
    ui,
    { initialState, store = createStore(reducers, initialState) } = {}
) {
    return {
        ...render(<Provider store={store}>{ui}</Provider>),
        // adding `store` to the returned utilities to allow us
        // to reference it in our tests (just try to avoid using
        // this to test implementation details).
        store,
    }
}
test('choose_option', async () => {
    const { getByTestId, getByText, rerender } = renderWithRedux(<Question />, {
        initialState,
    });
    expect(getByTestId('question-title').textContent).toBe(initialState.quiz.questions[0].title);
    // It should be an option that can be clicked
    fireEvent.click(getByTestId('option-title-1'));
});
test('current_level', () => {
    const { getByTestId, getByText, rerender } = renderWithRedux(<Question />, {
        initialState,
    });
    // Check the current level
    expect(getByTestId('current-level').textContent).toBe('0');
});

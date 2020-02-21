import React from 'react';

export const QuestionDetails = props => (
  <div className="card text-center">
    <div className="card-header" data-testid="question-title">
      {props.currentQuestion.title}
    </div>
    <div className="card-body row">
      {props.currentQuestion.options.map(option => (
        <div
          className="col-6"
          onClick={() => props.chooseAnswer(option.key)}
          key={option.key}
          data-testid={`option-title-${option.key}`}>
          <h5 className="card-title btn btn-info">{option.title}</h5>
        </div>
      ))}
    </div>
  </div>
);

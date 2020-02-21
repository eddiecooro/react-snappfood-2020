import React from 'react';

export const ScoreDetails = props => (
  <div className="card">
    <div className="card-header" data-testid="finish-text">
      بازی به اتمام رسید
    </div>
    <div className="card-body">
      <blockquote className="blockquote mb-0">
        <p>
          امتیاز شما :<span data-testid="score">{props.person.score}</span>
        </p>
        <footer className="blockquote-footer">
          <p>
            تعداد پاسخ های درست :
            <span data-testid="right-answer">{props.person.rightAnswers}</span>
          </p>
          <p>
            تعداد پاسخ های غلط :
            <span data-testid="wrong-answer">{props.person.wrongAnswers}</span>
          </p>
          <p>
            تعداد سوالات بی پاسخ :
            <span data-testid="no-answer">{props.person.noAnswers}</span>
          </p>
        </footer>
      </blockquote>
      <a
        href="#"
        className="btn btn-primary"
        data-testid="reset-btn"
        onClick={props.resetQuiz}>
        شروع مجدد
      </a>
    </div>
  </div>
);

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { QuestionDetails } from './questionDetails';
import { Counter } from './counter';
import { ScoreDetails } from './scoreDetails';
import { updatePerson, finishQuiz, nextLevel, reset } from './actions/index';

class Question extends React.Component {
  state = {
    timer: 5
  };
  interval = null;

  componentDidMount() {
    this.upsertTimer();
  }
  componentDidUpdate(prevProps) {
    if (this.props.currentLevel !== prevProps.currentLevel) {
      this.upsertTimer();
    }
  }
  upsertTimer = () => {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
      this.setState({ timer: 5 });
    }
    if (this.props.level.isFinished) return;
    this.interval = setInterval(() => {
      if (this.state.timer !== 1) {
        this.setState({ timer: this.state.timer - 1 });
      } else {
        this.props.updatePerson({
          noAnswers: this.props.person.noAnswers + 1
        });
        this.next();
      }
    }, 1000);
  };

  handleChooseAnswer = selectedKey => {
    const person = this.props.person;
    const currentScore = person.score;
    if (selectedKey === this.props.currentQuestion.answerKey) {
      this.props.updatePerson({
        score: currentScore + this.props.currentQuestion.score,
        rightAnswers: person.rightAnswers + 1
      });
    } else {
      this.props.updatePerson({
        score: currentScore - 10,
        wrongAnswers: person.wrongAnswers + 1
      });
    }
    this.next();
  };
  next = () => {
    if (this.props.currentLevel === this.props.level.levels) {
      this.props.finishQuiz();
    } else {
      this.props.nextLevel();
    }
  };
  render() {
    const currentLevel = this.props.level.currentLevel;
    const currentQuestion = this.props.questions[currentLevel];
    if (this.props.level.isFinished) {
      return (
        <ScoreDetails person={this.props.person} resetQuiz={this.props.reset} />
      );
    }
    return (
      <>
        <QuestionDetails
          currentQuestion={currentQuestion}
          chooseAnswer={this.handleChooseAnswer}
        />
        <Counter seconds={this.state.timer} currentLevel={currentLevel} />
      </>
    );
  }
}

const mapStateToProps = state => {
  const currentLevel = state.level.currentLevel;
  const currentQuestion = state.quiz.questions[currentLevel];
  return {
    currentLevel,
    currentQuestion,
    level: state.level,
    questions: state.quiz.questions,
    person: state.person
  };
};

const mapDispatchToProps = (dispatch, ownProps) =>
  bindActionCreators(
    {
      updatePerson,
      nextLevel,
      finishQuiz,
      reset
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(Question);

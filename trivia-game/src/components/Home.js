import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllQuestions } from "../actions/action";
import ResponseModale from "./ResponseModale";

class Home extends Component {
  state = {
    currentQues: 0,
    options: null,
    rightAnswer: null,
    isCorrect: false,
    score: 0,
    isModale: false
  };

  componentDidMount = () => {
    this.props.dispatch(
      getAllQuestions((succeed, data) => {
        if (succeed) {
          const { incorrect_answers, correct_answer } = data[
            this.state.currentQues
          ];
          const mixedArr = [...incorrect_answers, correct_answer];
          this.setState({
            options: mixedArr.sort(() => Math.random() - 0.5),
            rightAnswer: correct_answer
          });
        }
      })
    );
  };

  handleModale = () => {
    this.setState({
      isModale: !this.state.isModale
    });
  };

  handleAns = selectedAns => {
    const { incorrect_answers, correct_answer } = this.props.questions[
      this.state.currentQues
    ];
    const mixedArr = [...incorrect_answers, correct_answer];
    if (selectedAns !== this.state.rightAnswer) {
      this.setState({
        isCorrect: false,
        currentQues: this.state.currentQues + 1,
        options: mixedArr.sort(() => Math.random() - 0.5),
        rightAnswer: correct_answer,
        isModale: !this.state.isModale
      });
    } else {
      this.setState({
        currentQues: this.state.currentQues + 1,
        options: mixedArr.sort(() => Math.random() - 0.5),
        score: this.state.score + 10,
        isCorrect: true,
        rightAnswer: correct_answer,
        isModale: !this.state.isModale
      });
    }
  };

  render() {
    const { questions } = this.props;
    const { currentQues, options, score, isModale } = this.state;
    if (!isModale) {
      return (
        <div className="quiz-container">
          <div className="quiz-top-nav">
            <span className="score">{currentQues + 1} out of 10</span>
            <span className="score">Score: {score}</span>
          </div>
          <div className="quiz-wrapper">
            {questions[currentQues] ? (
              <div>
                <h3>{questions[currentQues].question}</h3>
                {options &&
                  options.map((q, i) => (
                    <p key={i} onClick={() => this.handleAns(q)}>
                      {q}
                    </p>
                  ))}
              </div>
            ) : (
              <div />
            )}
          </div>
        </div>
      );
    } else {
      return (
        <ResponseModale
          isCorrect={this.state.isCorrect}
          handleModale={this.handleModale}
        />
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    questions: state.allQues
  };
};

export default connect(mapStateToProps)(Home);

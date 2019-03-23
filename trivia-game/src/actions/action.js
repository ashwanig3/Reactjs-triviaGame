const url =
  "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";

export function getAllQuestions(cb) {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "ALL_QUES", data: data.results });
        const ques = data.results;
        cb(true, ques);
      });
  };
}

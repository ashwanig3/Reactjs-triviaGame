const initState = {
  allQues: []
};

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case "ALL_QUES": {
      return {
        ...state,
        allQues: action.data
      };
    }
    default:
      return state;
  }
}

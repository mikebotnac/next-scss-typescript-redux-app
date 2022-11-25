import * as t from "../types";

const main = (state = { currentPage: "0", prevPage: [1, 2, 3] }, action) => {
  switch (action.type) {
    case t.SET_PAGE_INFO:
      return {
        ...state,
        prevPage: action.payload.prev,
        currentPage: action.payload.current,
      };
      break;

    default:
      return {
        ...state,
      };
  }
};

export default main;

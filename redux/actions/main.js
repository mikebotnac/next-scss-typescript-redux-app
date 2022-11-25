import * as t from "../types";

export const setInfo = (pageInfo) => (dispatch) => {
  dispatch({
    type: t.SET_PAGE_INFO,
    payload: pageInfo,
  });
};

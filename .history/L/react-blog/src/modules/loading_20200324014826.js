import { createAction, handleActions } from "redux-actions";

const START_LOADING = "loading/START_LOADING";
const FINISH_LOADING = "loading/FINISH_LOADING";

export const startLoading = createAction(
  START_LOADING,
  requestType => requestType
);

export const FINISH_LOADING = createAction(
  FINISH_LOADING,
  requestType => requestType
);

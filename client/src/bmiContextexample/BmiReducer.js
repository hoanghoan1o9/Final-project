import {
  BMI_LOADED_SUCCESS,
  BMI_LOADED_FAIL,
  ADD_BMI,
  DELETE_BMI,
} from "./constants";
export const bmiReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case BMI_LOADED_SUCCESS:
      return {
        ...state,
        bmis: payload,
        bmiLoading: false,
      };
    case BMI_LOADED_FAIL:
      return {
        ...state,
        bmis: [],
        bmiLoading: false,
      };
    case ADD_BMI:
      return {
        ...state,
        bmis: [...state.bmis, payload],
      };
    case DELETE_BMI:
      return {
        ...state,
        bmis: state.bmis.filter((bmi) => bmi._id !== payload),
      };
    default:
      return state;
  }
};

import { createContext, useReducer } from "react";
import { bmiReducer } from "../bmiContext/BmiReducer";
import {
  BMI_LOADED_SUCCESS,
  BMI_LOADED_FAIL,
  ADD_BMI,
  DELETE_BMI,
} from "./constants";
import axios from "axios";

export const BmiContext = createContext();

export const BmiContextProvider = ({ children }) => {
  //state
  const [bmiState, dispatch] = useReducer(bmiReducer, {
    bmi: null,
    bmis: [],
    bmisLoading: true,
  });

  //get all bmis
  const getBmis = async () => {
    try {
      const response = await axios.get("/bmis", {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      if (response.data.success) {
        dispatch({ type: BMI_LOADED_SUCCESS, payload: response.data.bmis });
      }
    } catch (error) {
      dispatch({ type: BMI_LOADED_FAIL });
    }
  };

  //create bmi
  const addBmi = async (newBmi) => {
    try {
      const response = await axios.post("/bmis", newBmi);
      if (response.data.success) {
        dispatch({ type: ADD_BMI, payload: response.bmi });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  //delete bmi
  const deleteBmi = async (bmiId) => {
    try {
      const response = await axios.delete(`/bmis/${bmiId}`);
      if (response.data.success) {
        dispatch({ type: DELETE_BMI, payload: bmiId });
      }
    } catch (error) {
      console.log(error);
    }
  };

  //bmi context data
  const bmiContextData = {
    bmiState,
    getBmis,
    addBmi,
    deleteBmi,
  };
  return (
    <BmiContext.Provider value={bmiContextData}>{children}</BmiContext.Provider>
  );
};

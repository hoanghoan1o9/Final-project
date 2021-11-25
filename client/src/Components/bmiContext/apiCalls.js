import axios from "axios";
import {
  // getBmisStart,
  getBmisSuccess,
  getBmisFailure,
  createbmiStart,
  createbmiSuccess,
  createbmiFailure,
  deleteBmiStart,
  deleteBmiSuccess,
  deleteBmiFailure,
} from "./BmiActions";

export const getBmis = async (dispatch) => {
  // dispatch(getBmisStart());
  try {
    const res = await axios.get("/bmis", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getBmisSuccess(res.data));
  } catch (err) {
    dispatch(getBmisFailure());
  }
};

// create
export const createBmi = async (bmi, dispatch) => {
  dispatch(createbmiStart());
  try {
    const res = await axios.post("/bmis", bmi, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createbmiSuccess(res.data));
  } catch (err) {
    dispatch(createbmiFailure());
  }
};

// //delete
export const deleteBmi = async (id, dispatch) => {
  dispatch(deleteBmiStart());
  try {
    await axios.delete("/lists/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteBmiSuccess(id));
  } catch (err) {
    dispatch(deleteBmiFailure());
  }
};

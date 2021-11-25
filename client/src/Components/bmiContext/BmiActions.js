export const getBmisStart = () => ({
  type: "GET_BMIS_START",
});

export const getBmisSuccess = (bmis) => ({
  type: "GET_BMIS_SUCCESS",
  payload: bmis,
});

export const getBmisFailure = () => ({
  type: "GET_BMIS_FAILURE",
});

export const createbmiStart = () => ({
  type: "CREATE_BMI_START",
});

export const createbmiSuccess = (bmi) => ({
  type: "CREATE_BMI_SUCCESS",
  payload: bmi,
});

export const createbmiFailure = () => ({
  type: "CREATE_BMI_FAILURE",
});

export const deleteBmiStart = () => ({
  type: "DELETE_BMI_START",
});

export const deleteBmiSuccess = (id) => ({
  type: "DELETE_BMI_SUCCESS",
  payload: id,
});

export const deleteBmiFailure = () => ({
  type: "DELETE_BMI_FAILURE",
});

const BmiReducer = (state, action) => {
    switch (action.type) {
      case "GET_BMIS_START":
        return {
          bmis: [],
          isFetching: true,
          error: false,
        };
      case "GET_BMIS_SUCCESS":
        return {
          bmis: action.payload,
          isFetching: false,
          error: false,
        };
      case "GET_BMIS_FAILURE":
        return {
          bmis: [],
          isFetching: false,
          error: true,
        };
      default:
        return { ...state };
    }
  };
  
  export default BmiReducer;
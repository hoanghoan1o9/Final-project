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
      // case "DELETE_LIST_START":
      //   return {
      //     ...state,
      //     isFetching: true,
      //     error: false,
      //   };
      // case "DELETE_LIST_SUCCESS":
      //   return {
      //     lists: state.lists.filter((list) => list._id !== action.payload),
      //     isFetching: false,
      //     error: false,
      //   };
      // case "DELETE_LIST_FAILURE":
      //   return {
      //     ...state,
      //     isFetching: false,
      //     error: true,
      //   };
      default:
        return { ...state };
    }
  };
  
  export default BmiReducer;
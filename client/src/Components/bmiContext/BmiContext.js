import BmiReducer from "./BmiReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  bmis: [],
  isFetching: false,
  error: false,
};

export const BmiContext = createContext(INITIAL_STATE);

export const BmiContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BmiReducer, INITIAL_STATE);

  return (
    <BmiContext.Provider
      value={{
        bmis: state.bmis,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </BmiContext.Provider>
  );
};

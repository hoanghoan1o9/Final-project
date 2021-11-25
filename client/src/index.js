import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { AuthContextProvider } from "./authContext/AuthContext";
// import { BmiContextProvider } from "./bmiContext/BmiContext";

ReactDOM.render(
  <AuthContextProvider>
    {/* <BmiContextProvider> */}
      <App />
    {/* </BmiContextProvider> */}
  </AuthContextProvider>,
  document.getElementById("root")
);

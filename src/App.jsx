import "./App.css";
import { Homepage } from "../components/Homepage";
import { ContextProvider } from "../EmployeContext/ContextProvider";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ContextProvider>
        <Homepage />
        <ToastContainer />
      </ContextProvider>
    </>
  );
}

export default App;

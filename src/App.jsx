import "./App.css";
import { Homepage } from "../components/Homepage";
import { ContextProvider } from "../EmployeContext/ContextProvider";

function App() {
  return (
    <>
      <ContextProvider>
        <Homepage />
      </ContextProvider>
      ;
    </>
  );
}

export default App;

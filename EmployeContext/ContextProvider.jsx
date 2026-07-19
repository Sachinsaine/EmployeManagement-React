import { useReducer, useState } from "react";
import { EmployeContext } from "./EmployeContext";

const initialEmployee = {
  name: "",
  email: "",
  jobTitle: "",
  department: "",
  status: "",
  startDate: "",
  salary: "",
};

let initialState = {
  employe: initialEmployee,
  employees: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        employe: {
          ...state.employe,
          [action.payload.name]: action.payload.value,
        },
      };

    case "ADD_EMPLOYE":
      return {
        ...state,
        employees: [...state.employees, action.payload],
        employe: initialEmployee,
      };

    case "REMOVE_EMPLOYE":
      return {
        ...state,
        employees: state.employees.filter((user) => user.id !== action.payload),
      };

    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");
  const [sequal, setSequal] = useState(true);
  const [dept, setDept] = useState("All");
  const [statusCheck, setStatusCheck] = useState("All");
  return (
    <EmployeContext.Provider
      value={{
        state,
        dispatch,
        input,
        setInput,
        sequal,
        setSequal,
        dept,
        setDept,
        statusCheck,
        setStatusCheck,
      }}
    >
      {children}
    </EmployeContext.Provider>
  );
};

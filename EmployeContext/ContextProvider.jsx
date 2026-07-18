import { useReducer, useState } from "react";
import { EmployeContext } from "./EmployeContext";

let initialState = {
  employe: {
    name: "",
    email: "",
    jobTitle: "",
    department: "",
    status: "",
    startDate: "",
    salary: "",
  },
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
      return { ...state, employees: [...state.employees, action.payload] };

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
  return (
    <EmployeContext.Provider value={{ state, dispatch, input, setInput }}>
      {children}
    </EmployeContext.Provider>
  );
};

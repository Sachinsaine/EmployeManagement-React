import { useReducer } from "react";
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

    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <EmployeContext.Provider value={{ state, dispatch }}>
      {children}
    </EmployeContext.Provider>
  );
};

import styles from "./EmployeTable.module.css";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useContext } from "react";
import { EmployeContext } from "../EmployeContext/EmployeContext";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const EmployeTable = () => {
  const { state, dispatch, input, setInput, sequal, setSequal } =
    useContext(EmployeContext);

  let filterUsers = state.employees.filter((user) =>
    user.name.toLowerCase().includes(input),
  );

  const sortedUsers = [...filterUsers].sort((a, b) => {
    const result = a.name.localeCompare(b.name);

    return sequal ? result : -result;
  });

  const handleSqual = () => {
    setSequal((prev) => !prev);
  };

  return (
    <div className={styles.employee}>
      <div className={styles.employeTablecontainer}>
        <div className={styles.searchBox}>
          <SearchOutlinedIcon />
          <input
            type="text"
            placeholder="Search an employee"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <select name="All" id="">
          <option value="All">All</option>
          <option value="">Design</option>
          <option value="">Engineering</option>
          <option value="">HR</option>
          <option value="">Marketing</option>
          <option value="">Product</option>
          <option value="">Sales</option>
        </select>
        <select name="All" id="">
          <option value="All">All</option>
          <option value="">Active</option>
          <option value="">On Leave</option>
          <option value="">Inactive</option>
        </select>
      </div>
      {state.employees.length === 0 ? (
        <h1>There is no employee</h1>
      ) : (
        <main
          className={styles.EmployeTable}
          style={{ display: state.employees.length === 0 ? "none" : "block" }}
        >
          <div className={styles.action}>
            <span className={styles.actionCont}>
              Employee{" "}
              {sequal ? (
                <ArrowUpwardIcon onClick={handleSqual} fontSize="small" />
              ) : (
                <ArrowDownwardIcon onClick={handleSqual} fontSize="small" />
              )}
            </span>
            <span className={styles.actionCont}>ACTIONS</span>
          </div>
          <form>
            {sortedUsers.map((data, index) => {
              let firstLatter = data.name.split(" ");
              let userName = firstLatter.map((user) =>
                user.charAt(0).toUpperCase(),
              );

              return (
                <div key={index} className={styles.employeeCard}>
                  <div className={styles.leftSection}>
                    <div className={styles.avatar}> {userName} </div>

                    <div className={styles.employeeInfo}>
                      <h3>{data.name} </h3>
                      <p>
                        EMP-{String(data.id).padStart(3, "0")} •{" "}
                        {data.department} • {data.status}{" "}
                      </p>
                    </div>
                  </div>

                  <div className={styles.actions}>
                    <EditOutlinedIcon />
                    <DeleteOutlineOutlinedIcon
                      onClick={() =>
                        dispatch({ type: "REMOVE_EMPLOYE", payload: data.id })
                      }
                    />
                  </div>
                </div>
              );
            })}
          </form>
        </main>
      )}
    </div>
  );
};

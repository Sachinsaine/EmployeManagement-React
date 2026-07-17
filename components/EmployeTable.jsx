import styles from "./EmployeTable.module.css";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useContext } from "react";
import { EmployeContext } from "../EmployeContext/EmployeContext";

export const EmployeTable = () => {
  const { state } = useContext(EmployeContext);
  console.log(state.employees);

  return (
    <form>
      <h1></h1>
      <div className={styles.employeTablecontainer}>
        <div className={styles.searchBox}>
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search an employee" />
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
      {state.employees.map((data) => {
        return (
          <div className={styles.employeeCard}>
            <div className={styles.leftSection}>
              <div className={styles.avatar}>AR</div>

              <div className={styles.employeeInfo}>
                <h3>{data.name} </h3>
                <p>EMP-001 • {data.department}</p>
              </div>
            </div>

            <div className={styles.actions}>
              <EditOutlinedIcon />
              <DeleteOutlineOutlinedIcon />
            </div>
          </div>
        );
      })}
    </form>
  );
};

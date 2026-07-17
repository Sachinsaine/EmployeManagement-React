import styles from "./Homepage.module.css";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { EmployeTable } from "./EmployeTable";
import { Navbar } from "./Navbar";
import { useState } from "react";
import { EmployeDialog } from "./EmployeDialog";
// import { EmployeContext } from "../EmployeContext/EmployeContext";

export const Homepage = () => {
  const [open, setOpen] = useState(false);
  // const { state } = useContext(EmployeContext);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Navbar handleOpen={handleOpen} />
      <div className={styles.headerCont}>
        <div className={styles.dataBox}>
          <PeopleAltOutlinedIcon />
          <div className={styles.data}>
            <span>9</span>
            <span>Total employees</span>
          </div>
        </div>
        <div className={styles.dataBox}>
          <ApartmentOutlinedIcon />
          <div className={styles.data}>
            <span>9</span>
            <span>Departments</span>
          </div>
        </div>
        <div className={styles.dataBox}>
          <PersonOutlineOutlinedIcon />
          <div className={styles.data}>
            <span>9</span>
            <span>Active now</span>
          </div>
        </div>
        <div className={styles.dataBox}>
          <PersonOutlineOutlinedIcon />
          <div className={styles.data}>
            <span>$999</span>
            <span>Avg. salary</span>
          </div>
        </div>
      </div>
      <EmployeTable />
      <EmployeDialog open={open} handleClose={handleClose} />
    </div>
  );
};

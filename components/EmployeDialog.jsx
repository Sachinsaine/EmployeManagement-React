import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import styles from "./EmployeDialog.module.css";
import { useContext } from "react";
import { EmployeContext } from "../EmployeContext/EmployeContext";

export const EmployeDialog = ({ open, handleClose }) => {
  const { dispatch, state } = useContext(EmployeContext);

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle className={styles.title}>
        <span>Add Employee</span>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <div className={styles.content}>
        <div className={styles.formGroup}>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="e.g. Jordan Blake"
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                payload: { name: "name", value: e.target.value },
              })
            }
          />
        </div>

        <div className={styles.formGroup}>
          <label>Email</label>

          <div className={styles.inputIcon}>
            <EmailOutlinedIcon />
            <input
              type="email"
              placeholder="name@company.com"
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  payload: { name: "email", value: e.target.value },
                })
              }
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Job Title</label>
          <input
            type="text"
            placeholder="e.g. Product Designer"
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                payload: { name: "jobTitle", value: e.target.value },
              })
            }
          />
        </div>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label>Department</label>

            <select
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  payload: { name: "department", value: e.target.value },
                })
              }
            >
              <option value="">Select Department</option>
              <option value="Engineering">Engineering</option>
              <option value="Design">Design</option>
              <option value="HR">HR</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Status</label>

            <select
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  payload: { name: "status", value: e.target.value },
                })
              }
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="On Leave">On Leave</option>
            </select>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label>Start Date</label>

            <input
              type="date"
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  payload: { name: "startDate", value: e.target.value },
                })
              }
            />
          </div>

          <div className={styles.formGroup}>
            <label>Salary (USD)</label>

            <input
              type="number"
              placeholder="90000"
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  payload: { name: "salary", value: e.target.value },
                })
              }
            />
          </div>
        </div>
      </div>

      <DialogActions className={styles.actions}>
        <Button variant="outlined" color="error" onClick={handleClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
          color="primary"
          startIcon={<CheckIcon />}
          onClick={() =>
            dispatch({ type: "ADD_EMPLOYE", payload: state.employe })
          }
        >
          Add Employee
        </Button>
      </DialogActions>
    </Dialog>
  );
};

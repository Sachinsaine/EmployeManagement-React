import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import styles from "./EmployeDialog.module.css";
import { useContext, useEffect, useState } from "react";
import { EmployeContext } from "../EmployeContext/EmployeContext";
import { toast } from "react-toastify";

export const EmployeDialog = ({ handleClose }) => {
  const { dispatch, open, selectedEmploye } = useContext(EmployeContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jobTitle: "",
    department: "",
    status: "",
    startDate: "",
    salary: "",
  });

  useEffect(() => {
    if (selectedEmploye) {
      setFormData(selectedEmploye);
    }
  }, [selectedEmploye]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
            name="name"
            placeholder="e.g. Jordan Blake"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Email</label>

          <div className={styles.inputIcon}>
            <EmailOutlinedIcon />

            <input
              type="email"
              name="email"
              placeholder="name@company.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Job Title</label>

          <input
            type="text"
            name="jobTitle"
            placeholder="e.g. Product Designer"
            value={formData.jobTitle}
            onChange={handleChange}
          />
        </div>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label>Department</label>

            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
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
              name="status"
              value={formData.status}
              onChange={handleChange}
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
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Salary (USD)</label>

            <input
              type="number"
              name="salary"
              placeholder="90000"
              value={formData.salary}
              onChange={handleChange}
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
          disabled={Object.values(formData).some((value) => !value)}
          onClick={() => {
            if (selectedEmploye) {
              dispatch({
                type: "UPDATE_EMPLOYE",
                payload: formData,
              });

              toast.success("Employee updated successfully");
            } else {
              const employeeId = Math.floor(Math.random() * 100) + 1;

              dispatch({
                type: "ADD_EMPLOYE",
                payload: {
                  ...formData,
                  id: employeeId,
                },
              });

              toast.success("Employee added successfully");
            }

            handleClose();
          }}
        >
          {selectedEmploye ? "Update Employee" : "Add Employee"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

import { useContext, useEffect, useState } from "react";
import { EmployeContext } from "../EmployeContext/EmployeContext";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { toast } from "react-toastify";
import styles from "./EmployeDialog.module.css";

const initialFormData = {
  name: "",
  email: "",
  jobTitle: "",
  department: "",
  status: "",
  startDate: "",
  salary: "",
};

export const EmployeDialog = ({ handleClose }) => {
  const { dispatch, open, selectedEmploye, setSelectedEmploye, setOpen } =
    useContext(EmployeContext);

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (selectedEmploye) {
      setFormData(selectedEmploye);
    } else {
      setFormData(initialFormData);
    }
  }, [selectedEmploye, open]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const closeDialog = () => {
    setFormData(initialFormData);
    setSelectedEmploye(null);
    setOpen(false);
  };

  const handleSubmit = () => {
    if (selectedEmploye) {
      dispatch({
        type: "UPDATE_EMPLOYE",
        payload: formData,
      });

      toast.success("Employee updated successfully");
    } else {
      dispatch({
        type: "ADD_EMPLOYE",
        payload: {
          ...formData,
          id: Date.now(),
        },
      });

      toast.success("Employee added successfully");
    }

    closeDialog();
  };

  return (
    <Dialog open={open} onClose={closeDialog} fullWidth maxWidth="sm">
      <DialogTitle className={styles.title}>
        <span>{selectedEmploye ? "Update Employee" : "Add Employee"}</span>

        <IconButton onClick={closeDialog}>
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
            <label>Salary</label>

            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <DialogActions className={styles.actions}>
        <Button variant="outlined" color="error" onClick={closeDialog}>
          Cancel
        </Button>

        <Button
          variant="contained"
          startIcon={<CheckIcon />}
          disabled={Object.values(formData).some((value) => !value)}
          onClick={handleSubmit}
        >
          {selectedEmploye ? "Update Employee" : "Add Employee"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

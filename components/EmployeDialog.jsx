import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import styles from "./EmployeDialog.module.css";

export const EmployeDialog = ({ open, handleClose }) => {
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
          <input type="text" placeholder="e.g. Jordan Blake" />
        </div>

        <div className={styles.formGroup}>
          <label>Email</label>

          <div className={styles.inputIcon}>
            <EmailOutlinedIcon />
            <input type="email" placeholder="name@company.com" />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Job Title</label>
          <input type="text" placeholder="e.g. Product Designer" />
        </div>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label>Department</label>

            <select>
              <option>Engineering</option>
              <option>Design</option>
              <option>HR</option>
              <option>Marketing</option>
              <option>Sales</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Status</label>

            <select>
              <option>Active</option>
              <option>Inactive</option>
              <option>On Leave</option>
            </select>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label>Start Date</label>

            <input type="date" />
          </div>

          <div className={styles.formGroup}>
            <label>Salary (USD)</label>

            <input type="number" placeholder="90000" />
          </div>
        </div>
      </div>

      <DialogActions className={styles.actions}>
        <Button variant="outlined" color="error" onClick={handleClose}>
          Cancel
        </Button>

        <Button variant="contained" color="primary" startIcon={<CheckIcon />}>
          Add Employee
        </Button>
      </DialogActions>
    </Dialog>
  );
};

import styles from "./Navbar.module.css";
export const Navbar = ({ handleOpen }) => {
  return (
    <div className={styles.navCont}>
      <div>
        <h1 className={styles.logo}>Employees</h1>
        <div>Manage your team's records in one place.</div>
      </div>
      <button onClick={handleOpen} className={styles.addBtn}>
        + Add Employe
      </button>
    </div>
  );
};

import styles from "./Drawer.module.css";
const Drawer = ({ children }) => {
  return <div className={styles.drawer}>{children}</div>;
};
export default Drawer;

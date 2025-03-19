import styles from "./styles.module.scss";

export const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <p className={styles.title}>Loading...</p>
      <div className={styles.spinner}></div>
    </div>
  );
};

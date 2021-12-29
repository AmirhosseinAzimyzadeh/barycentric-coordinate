import styles from './cartesian-board.module.css';

export default function CartesianBoard() {
  return (
    <div className={styles.container}>
      <div className={styles.y_axis} />
      <div className={styles.x_axis} />
    </div>
  );
}
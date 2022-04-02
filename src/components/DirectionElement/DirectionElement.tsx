import styles from "./DirectionElement.module.css";

interface DirectionElementProps {
  variant?: "circular" | "square" | "rounded";
}

export function DirectionElement({ variant }: DirectionElementProps) {
  return (
    <div className={styles.direction_container}>
      <div className={styles.line} />
      <div className={styles.triangle} />
      <div className={styles.triangle} />
      <div className={`${styles.triangle} ${styles.triangle_light}`} />
    </div>
  );
}

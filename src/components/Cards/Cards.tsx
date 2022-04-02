import styles from "./Cards.module.css";

interface CardProps {
  title?: string;
  backgroundImage?: string;
  description?: string;
  children: React.ReactNode;
  variant?: string;
}

export function Cards({ children, variant }: CardProps) {
  const classes = [styles.card_container];
  variant === "curved" && classes.push(styles.curved);
  return <div className={classes.join(" ")}>{children}</div>;
}

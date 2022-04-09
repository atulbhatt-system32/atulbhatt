import styles from "./Cards.module.css";

interface CardProps {
  title?: string;
  backgroundImage?: string;
  description?: string;
  children: React.ReactNode;
  variant?: string;
  purpose?: string;
}

export function Cards({ children, variant, purpose }: CardProps) {
  const classes = [styles.card_container];
  variant === "curved" && classes.push(styles.curved);
  purpose === "project" && classes.push(styles.project_card);
  return <div className={classes.join(" ")}>{children}</div>;
}

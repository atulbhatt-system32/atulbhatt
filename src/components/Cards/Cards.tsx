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
  purpose === "project" &&
    classes.push(
      styles.project_card,
      styles.children_wrapper,
      styles.projectcard_title,
      styles.projectcard_body
    );

  purpose === "skills" &&
    classes.push(styles.skills_card, styles.children_wrapper);
  return <div className={classes.join(" ")}>{children}</div>;
}

import styles from "./CTA.module.css";

interface CTAProps {
  title?: string;
  icon: React.SVGProps<SVGSVGElement>;
  variant?: "circular" | "square" | "rounded";
  filled?: boolean;
  onClick?: () => void;
}

export function CTA({ icon, filled, variant }: CTAProps) {
  const classes = [styles.cta__container];
  variant === "circular" && classes.push(styles.cta__container__circle);
  variant === "rounded" && classes.push(styles.cta__container__rounded);
  filled && classes.push(styles.filled);
  console.log(classes);
  return <div className={classes.join(" ")}>{icon}</div>;
}

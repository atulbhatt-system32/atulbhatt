import styles from "./CTA.module.css";

interface CTAProps {
  title?: string;
  icon: React.SVGProps<SVGSVGElement>;
  variant?: "circular" | "square" | "rounded";
  onClick?: () => void;
}

export function CTA({ icon, variant }: CTAProps) {
  const classes = [styles.cta__container];
  variant === "circular" && classes.push(styles.cta__container__circle);
  variant === "rounded" && classes.push(styles.cta__container__rounded);
  return <div className={classes.join(" ")}>{icon}</div>;
}

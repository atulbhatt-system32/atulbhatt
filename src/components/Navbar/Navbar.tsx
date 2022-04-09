import styles from "./Navbar.module.css";
interface NavbarProps {
  backgroundColor?: string;
  logoTitle: string;
}
export function Navbar({ logoTitle, ...props }: NavbarProps) {
  const classes = [styles.storybook__navbar];
  return (
    <div className={classes.join(" ")}>
      <div className={styles.storybook__navbar__logo}>
        <strong>{logoTitle}</strong>
      </div>
      <nav>
        <ul className={styles.storybook__navbar__list}>
          <li className={styles.storybook__navbar__list__item}>
            <a href="#">Home</a>
          </li>
          <li className={styles.storybook__navbar__list__item}>
            <a href="#">About</a>
          </li>
          <li className={styles.storybook__navbar__list__item}>
            <a href="#">Projects</a>
          </li>
          <li className={styles.storybook__navbar__list__item}>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

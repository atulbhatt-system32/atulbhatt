import styles from "./Navbar.module.css";
interface NavbarProps {
  children: React.ReactNode;
  backgroundColor?: string;
  logoTitle: string;
}

interface NavbarProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;

  /**
   * What background variant to use
   */
  variant?: "text" | "contained" | "outlined";
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
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

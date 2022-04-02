import styles from "./Button.module.css";

interface ButtonProps {
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

/**
 * Primary UI component for user interaction
 */

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  variant = "contained",
  ...props
}: ButtonProps) => {
  const classes = [];
  primary && classes.push(styles.storybook_button__primary);
  variant === "contained" && classes.push(styles.storybook_button__contained);
  variant === "outlined" && classes.push(styles.storybook_button__outlined);
  variant === "text" && classes.push(styles.storybook_button__text);
  return (
    <button
      type="button"
      className={[
        styles.storybook_button,
        `${styles[`storybook_button__${size}`]}`,
        ...classes,
      ].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

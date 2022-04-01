import "./button.css";

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
  primary && classes.push("storybook-button--primary");
  variant === "contained" && classes.push("storybook-button--contained");
  variant === "outlined" && classes.push("storybook-button--outlined");
  variant === "text" && classes.push("storybook-button--text");
  return (
    <button
      type="button"
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        ...classes,
      ].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

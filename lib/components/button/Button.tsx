import { twMerge } from "tailwind-merge";
import { primaryStyles, secondaryStyles } from "./Button.styles";

/**
 * Props for the button component or the ButtonViewModel
 */
export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant: "primary" | "secondary";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional: true if button width is 100%
   */
  fullWidth?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional disabled state
   */
  disabled?: boolean;
}

/**
 * This is the button component
 */
export const Button = ({
  variant = "primary",
  fullWidth = false,
  label,
  disabled = false,
  onClick,
  ...props
}: ButtonProps) => {
  let containerClasses = "";
  if (variant === "primary") {
    containerClasses = twMerge(primaryStyles, "cursor-pointer");
  }
  if (variant === "secondary") {
    containerClasses = twMerge(secondaryStyles, "cursor-pointer");
  }
  if (fullWidth) {
    containerClasses = twMerge(secondaryStyles, "w-full");
  }

  return (
    <div
      className={containerClasses}
      aria-disabled={disabled}
      onClick={disabled ? () => {} : onClick}
    >
      <div aria-disabled={disabled} role="button" {...props}>
        {label}
      </div>
    </div>
  );
};

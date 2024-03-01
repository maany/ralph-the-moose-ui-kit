import { twMerge } from "tailwind-merge";
/**
 * Props for Icon component
 * @private
 */
export interface IconProps {
  /**
   * The SVG image source for the icon, which is available in the assets folder.
   */
  src: string;
  /**
   * The alt text for the icon.
   */
  alt: string;
  /**
   * Additional classes to be added to the icon.
   */
  className?: string;
}

/**
 * Base Icon Component for all icons. This component can be used to render any icon in the assets folder.
 * The component library should not export this component publicly. Rather, it should export the individual
 * icon components.
 * @param {IconProps} props - The props for the component.
 * @private
 */
export const Icon = ({ src, alt, className }: IconProps) => {
  const classes = twMerge([
    "w-full",
    "relative",
    "h-6",
    "overflow-hidden",
    className,
  ]);
  return (
    <div className={classes}>
      <img alt={alt || "icon"} src={src} />
    </div>
  );
};
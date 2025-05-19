import "./MyLabel.css";

export interface Props {
  /**
   * The text to display in the label
   */

  label: string;

  /**
   * The size of the label
   * @default normal
   */
  size?: "normal" | "h1" | "h2" | "h3";

  AllCaps?: boolean;
  color?: "text-primary" | "text-secondary" | "text-tertiary";
  fontColor?: string;

  /** Color personalizado de la fuente  */
  backgroundColor?: string;
}

export const MyLabel = ({
  label,
  size,
  AllCaps = false,
  color = "text-primary",
  fontColor,
  backgroundColor = "transparent",
}: Props) => {
  return (
    <span
      className={`${size} ${color} label `}
      style={{
        color: fontColor,
        backgroundColor,
        textTransform: AllCaps ? "uppercase" : "none",
      }}>
      {label}
    </span>
  );
};

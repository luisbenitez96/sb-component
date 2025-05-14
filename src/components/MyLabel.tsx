import "./MyLabel.css";

interface Props {
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
}

export const MyLabel = ({
  label,
  size,
  AllCaps = false,
  color = "text-primary",
  fontColor,
}: Props) => {
  return (
    <span
      className={`${size} ${color} label `}
      style={{
        color: fontColor,
        textTransform: AllCaps ? "uppercase" : "none",
      }}>
      {label}
    </span>
  );
};

/* eslint-disable jsx-a11y/alt-text */
import "./styles.scss";

export function BorderBoxGradient({ message }) {
  return (
    <div className="border-gradient" aria-hidden="false">
      <span>{message}</span>
    </div>
  );
}

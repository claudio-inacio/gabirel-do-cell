/* eslint-disable jsx-a11y/alt-text */

import React, { memo } from "react";
import "./styles.scss";

export function BorderBoxGradient({ message }) {
  return (
    <div className="border-gradient" aria-hidden="false">
      <span>{message}</span>
    </div>
  );
}

// export default memo(BorderBoxGradient);

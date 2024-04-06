import * as React from "react";
import Button from "@mui/material/Button";

export default function ButtonUsage({
  onClick,
  startIcon,
  variant,
  props,
  onSubmit,
}) {
  return (
    <Button
      onClick={onClick}
      startIcon={startIcon}
      variant={variant}
      size="small"
      onSubmit={onSubmit}
    >
      {props}
    </Button>
  );
}

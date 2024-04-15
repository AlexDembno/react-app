import * as React from "react";
import Button from "@mui/material/Button";

export default function ButtonUsage({
  onClick,
  startIcon,
  variant,
  props,
  onSubmit,
  width,
  style,
}) {
  const buttonStyle = {
    ...style,
    width: width,
  };
  return (
    <Button
      onClick={onClick}
      startIcon={startIcon}
      variant={variant}
      size="small"
      onSubmit={onSubmit}
      disableElevation={true}
      width={width}
      style={buttonStyle}
    >
      {props}
    </Button>
  );
}

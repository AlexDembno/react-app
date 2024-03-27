import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

export default function ButtonUsage({ startIcon, variant, props }) {
  console.log(Button);
  return (
    <Button startIcon={startIcon} variant={variant} size="small">
      {props}
    </Button>
  );
}

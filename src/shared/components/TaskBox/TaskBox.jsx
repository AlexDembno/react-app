import * as React from "react";
import Box from "@mui/material/Box";

export default function TaskBox({ children }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        borderRadius: 1,
        border: "1px solid #007FFF",
        "&:hover": {
          border: "1px solid #0066CC",
        },
      }}
    >
      {children}
    </Box>
  );
}

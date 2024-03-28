import * as React from "react";
import Box from "@mui/material/Box";

export default function TaskBox({ children }) {
  return (
    <Box
      height={300}
      width={300}
      my={4}
      display="flex"
      alignItems="center"
      p={1}
      sx={{
        borderRadius: 1,
        border: "2px solid #007FFF",
        "&:hover": {
          border: "2px solid #0066CC",
        },
      }}
    >
      {children}
    </Box>
  );
}

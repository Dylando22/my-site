import { Box, Typography } from "@mui/material";
import React from "react";

export default function BudgetHome() {
  return (
    <div>
      <Box>
        <Typography variant="h3">Excel Budget Maker</Typography>
        <Box
          sx={{
            width: "80%",
            marginTop: "15px",
            borderRadius: "5px",
            margin: "auto",
            backgroundColor: "secondary.main",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Hello
        </Box>
      </Box>
    </div>
  );
}

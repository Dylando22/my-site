import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function BudgetHome() {
  const [price, setPrice] = useState("0.0");
  const [description, setDescription] = useState("");

  const handleAddClick = () => {
    const d = new Date();
    const payload = {
      date: d.toLocaleDateString(),
      price: price,
      description: description,
    };
    fetch(import.meta.env.VITE_APP_GOOGLE_SHEETS_URL, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    setPrice("");
    setDescription("");
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      setPrice("");
    } else {
      const num = parseFloat(event.target.value);
      if (!isNaN(num) && isFinite(num)) {
        setPrice(event.target.value);
      }
    }
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          margin: "auto",
          gap: "15px",
          padding: "50px",
        }}
      >
        <Typography textAlign="center" variant="h4">
          Add to Budget
        </Typography>
        <TextField
          label="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{
            width: "180px",
          }}
        />
        <TextField
          sx={{
            width: "120px",
          }}
          value={price}
          onChange={handlePriceChange}
          label="Price"
        />
        <Button
          onClick={handleAddClick}
          variant="contained"
          color="success"
          sx={{ width: "60px" }}
        >
          Add
        </Button>
      </Box>
    </div>
  );
}

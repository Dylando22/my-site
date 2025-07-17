import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function BudgetHome() {
  const [price, setPrice] = useState("0.0");
  const [description, setDescription] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (
      location.search.includes("description") &&
      location.search.includes("price")
    ) {
      let temp = location.search.split("&");
      let urlDescription = temp[0].replace("?description=", "");
      let urlPrice = temp[1].replace("price=", "");
      setDescription(urlDescription);
      setPrice(urlPrice);
      const d = new Date();
      const payload = {
        date: d.toLocaleDateString(),
        price: urlPrice,
        description: urlDescription,
      };
      fetch(import.meta.env.VITE_APP_GOOGLE_SHEETS_URL, {
        method: "POST",
        body: JSON.stringify(payload),
      }).then(() => {
        setDescription("");
        setPrice("");
      });
    }
  }, [location.search]);

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
    }).then(() => {
      setDescription("");
      setPrice("");
    });
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
          id="add-button"
        >
          Add
        </Button>
      </Box>
    </div>
  );
}

import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Input,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import GroceryItem from "../components/GroceryItem";
import { Close, Delete } from "@mui/icons-material";

export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  isChecked: boolean;
}

interface Ingredients {
  name: string;
  isChecked: boolean;
}

export default function GroceryHelper() {
  const [recipeList, setRecipeList] = useState<Recipe[]>([]);
  const [newItem, setNewItem] = useState("");
  const [allIngredients, setAllIngredients] = useState<Ingredients[]>([]);
  const [addItemOn, setAddItemOn] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRL1FoR0zDCBnWs0S7ZPXAwM02T3jobItW1-uWO0MQeq36XKd7l8tFAcvGk8crDeZdKPv9C8mpJ3Jlu/pub?output=csv"
    )
      .then((resp) => resp.text())
      .then((data) => {
        let rows = data.split(/\r?\n/);
        let items: Recipe[] = [];
        rows.forEach((row, index) => {
          let details = row.split(",");
          let r = {
            id: index,
            name: details[0],
            ingredients: details.slice(1).filter((item) => item !== ""),
            isChecked: false,
          };
          items.push(r);
        });
        setRecipeList(items);
      });
    let list = localStorage.getItem("currentList");
    if (list != null) {
      setAllIngredients(JSON.parse(list));
    }
  }, []);

  const toggleChecked = (id: number) => {
    let tempList = recipeList.slice();
    let idx = tempList.findIndex((item) => item.id === id);
    tempList[idx].isChecked = !tempList[idx].isChecked;
    setRecipeList(tempList);
  };

  const onGenerateClick = () => {
    let tempList = recipeList
      .filter((r) => r.isChecked)
      .map((r) => r.ingredients)
      .flat()
      .sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < tempList.length - 1; i++) {
      let j = i + 1;
      if (tempList[i].includes("-") && tempList[j].includes("-")) {
        let tempSplit1 = tempList[i].split("-");
        let ing1 = tempSplit1[0];
        let [_empty, num1, size1] = tempSplit1[1].split(" ");
        let tempSplit2 = tempList[j].split("-");
        let ing2 = tempSplit2[0];
        let [_empty1, num2, size2] = tempSplit2[1].split(" ");
        if (ing1 === ing2) {
          if (size1 == size2) {
            let newNum = parseFloat(num1) + parseFloat(num2);
            tempList[i] = `${ing1}- ${newNum} ${size1}`;
            tempList.splice(j, 1);
            i--;
          }
        }
      } else {
        if (tempList[i] === tempList[j]) {
          let count = 1;
          let ing = tempList[i];
          while (tempList[i] === tempList[j]) {
            count++;
            tempList.splice(i, 1);
          }
          tempList[i] = ing + " - " + count;
        }
      }
    }
    const currentIngredients = tempList.map((ing) => {
      return { name: ing, isChecked: false };
    });
    setAllIngredients(currentIngredients);
    localStorage.setItem("currentList", JSON.stringify(currentIngredients));
    setOpen(true);
  };

  const handleIngredientCheck = (name: string) => {
    let idx = allIngredients.findIndex((ing) => ing.name === name);
    let tempIng = allIngredients.slice();
    tempIng[idx].isChecked = !tempIng[idx].isChecked;
    setAllIngredients(tempIng);
    localStorage.setItem("currentList", JSON.stringify(tempIng));
  };

  const handleDeleteList = () => {
    setOpen(false);
    localStorage.removeItem("currentList");
    setAllIngredients([]);
  };

  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography textAlign="center" variant="h4">
            Grocery Helper
          </Typography>
          <Typography padding={1} textAlign={"center"}>
            Select all the recipes you would like to make this week.
          </Typography>
          {allIngredients.length > 0 && (
            <Button
              sx={{ width: "fit-content", margin: "auto" }}
              variant="contained"
              onClick={() => setOpen(true)}
            >
              View Current List
            </Button>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "auto",
            marginBottom: "20px",
          }}
        >
          {recipeList.map((recipe) => (
            <GroceryItem
              key={recipe.id}
              id={recipe.id}
              name={recipe.name}
              isChecked={recipe.isChecked}
              handleCheck={toggleChecked}
            />
          ))}
          <Button
            sx={{ width: "fit-content", margin: "auto" }}
            variant="contained"
            onClick={onGenerateClick}
          >
            Generate
          </Button>
        </Box>
      </Box>
      <Dialog
        fullWidth
        sx={{ width: "400px", margin: "auto" }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle>Grocery List</DialogTitle>
        <IconButton
          aria-label="delete"
          onClick={handleDeleteList}
          sx={{
            position: "absolute",
            right: 40,
            top: 12,
            color: "red",
          }}
        >
          <Delete />
        </IconButton>
        <IconButton
          aria-label="close"
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            right: 8,
            top: 12,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>
        <DialogContent dividers>
          {allIngredients.map((ing) => (
            <Box
              sx={{
                display: "flex",
                alignContent: "center",
                alignItems: "center",
              }}
              key={ing.name}
            >
              <Checkbox
                onChange={() => {
                  handleIngredientCheck(ing.name);
                }}
                checked={ing.isChecked}
              />
              <Typography variant="body1">{ing.name}</Typography>
            </Box>
          ))}
        </DialogContent>
        <DialogActions>
          {!addItemOn ? (
            <Button variant="contained" onClick={() => setAddItemOn(true)}>
              Add New Item
            </Button>
          ) : (
            <Box
              sx={{
                backgroundColor: "secondary.main",
                width: "fit-content",
                margin: "auto",
                marginTop: "10px",
                padding: "5px",
                borderRadius: "5px",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "start", sm: "center" },
              }}
            >
              <IconButton
                sx={{
                  alignSelf: "start",
                }}
                onClick={() => {
                  setAddItemOn(false);
                }}
              >
                <Close />
              </IconButton>
              <Typography marginLeft="10px" variant="caption">
                Item:
              </Typography>
              <Input
                value={newItem}
                autoFocus
                onChange={(e) => setNewItem(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && newItem !== "") {
                  }
                }}
                sx={{
                  marginLeft: "10px",
                }}
              />
              <Button
                sx={{
                  marginLeft: "10px",
                  marginTop: { xs: "10px", sm: "0" },
                }}
                color="success"
                variant="contained"
                size="small"
                onClick={() => {
                  setAllIngredients([
                    ...allIngredients,
                    { name: newItem, isChecked: false },
                  ]);
                  setNewItem("");
                }}
              >
                Save
              </Button>
            </Box>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}

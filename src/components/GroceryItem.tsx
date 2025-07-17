import { Box, Checkbox, Typography } from "@mui/material";

interface Props {
  id: number;
  name: string;
  isChecked: boolean;
  handleCheck: Function;
}

export default function GroceryItem({
  id,
  name,
  isChecked,
  handleCheck,
}: Props) {
  return (
    <Box
      component="div"
      onClick={(e) => {
        e.stopPropagation();
        handleCheck(id);
      }}
      sx={{
        backgroundColor: isChecked ? "#a6b0f5" : "#9d9d9e",
        display: "flex",
        margin: "5px 25px 5px 25px",
        borderRadius: "5px",
        padding: "10px",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <Checkbox checked={isChecked} />
      <Typography>{name}</Typography>
    </Box>
  );
}

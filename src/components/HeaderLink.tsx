import { Box } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  to: string;
  active: boolean;
  title: string;
  onClick: Function;
}

export default function HeaderLink({ to, active, title, onClick }: Props) {
  return (
    <Box
      sx={{
        ":hover": {
          color: "random.activeLink",
        },
        margin: "10px",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",

        color: active ? "random.activeLink" : "random.unactiveLink",
      }}
    >
      <Link onClick={() => onClick()} to={to}>
        {title}
      </Link>
    </Box>
  );
}

import { FaTrashCan } from "react-icons/fa6";
import { Checkbox, Button } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "./context/themeContext";

type ListItemProps = {
  id: string;
  title: string;
  completed: boolean;
  onDelete(id: string): void;
  toggle(id: string): void;
};

export default function ListItem({
  title,
  completed,
  id,
  onDelete,
  toggle,
}: ListItemProps) {
  const themeContext = useContext(ThemeContext);
  
  if (!themeContext) {
    throw new Error("ThemeContext must be used within a ThemeProvider");
  }

  const { darkTheme } = themeContext;

  return (
    <li
      className={`${darkTheme ? "bg" : ""} list-group ${!darkTheme ? "list-group-item" : ""} p-1 m-2`}
    >
      <div className="d-flex justify-content-between">
        <Checkbox onChange={() => toggle(id)} checked={completed} />
        <span
          className={`${darkTheme ? "text-light" : ""} ${completed ? "text-decoration-line-through" : ""}`}
        >
          {title}
        </span>
        <Button
          color="error"
          variant="contained"
          onClick={() => onDelete(id)}
          size="small"
        >
          <FaTrashCan />
        </Button>
      </div>
    </li>
  );
}

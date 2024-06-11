import { FaNoteSticky } from "react-icons/fa6";
import { TextField, Button } from "@mui/material";
import { FaPlusCircle } from "react-icons/fa";
import { ThemeContext } from "./context/themeContext";
import { useContext } from "react";
type formProps = {
  submit(): void;
  change(): void;
  text: string;
};
export default function TodoForm({ submit, change, text }: formProps) {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <form onSubmit={submit}>
      <span
        className={` text-center accordion mb-3 ${darkTheme && " text-light"} `}
      >
        <center>
          <FaNoteSticky /> Add Notes
        </center>
      </span>

      <TextField
        label="Note title"
        onChange={change}
        value={text}
        className=" w-100 mt-3 "
        sx={{ backgroundColor:" white"}}
      />

      <center>
        <Button
          variant="contained"
          type=" submit"
          startIcon={<FaPlusCircle />}
          className=" mt-2"
        >
          ADD
        </Button>
      </center>
    </form>
  );
}

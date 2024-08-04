import { FaNoteSticky, FaCircle } from "react-icons/fa6";
import { TextField, Button } from "@mui/material";
import { ThemeContext } from "./context/themeContext";
import { useContext, ChangeEvent, FormEvent } from "react";

type FormProps = {
  submit(event: FormEvent): void;
  change(event: ChangeEvent<HTMLInputElement>): void;
  text: string;
};

export default function TodoForm({ submit, change, text }: FormProps) {
  const themeContext = useContext(ThemeContext);
  
  if (!themeContext) {
    throw new Error("ThemeContext must be used within a ThemeProvider");
  }

  const { darkTheme } = themeContext;

  return (
    <form onSubmit={submit}>
      <span className={`text-center accordion mb-3 ${darkTheme ? "text-light" : ""}`}>
        <center>
          <FaNoteSticky /> Add Notes
        </center>
      </span>

      <TextField
        label="Note title"
        onChange={change}
        value={text}
        className="w-100 mt-3"
        sx={{ backgroundColor: "white" }}
      />

      <center>
        <Button
          variant="contained"
          type="submit"
          startIcon={<FaCircle />}
          className="mt-2"
        >
          ADD
        </Button>
      </center>
    </form>
  );
}

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoForm from "./components/todo-form";
import { useContext, useEffect, useState, ChangeEvent, FormEvent } from "react";
import ListItem from "./components/list-item";
import { FaNoteSticky, FaSun, FaTrashCan, FaMoon } from "react-icons/fa6";
import toast from "react-hot-toast";
import { Card, IconButton } from "@mui/material";
import { ThemeContext } from "./components/context/themeContext";

type Note = {
  id: string;
  completed: boolean;
  title: string;
};

function App() {
  const { darkTheme, toogleTheme } = useContext(ThemeContext);

  const [notes, setNotes] = useState<Note[]>(() => {
    const value = localStorage.getItem("notes");
    return value ? JSON.parse(value) : [];
  });

  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function addNote() {
    setNotes((prevNotes) => [
      ...prevNotes,
      { id: crypto.randomUUID(), title: text, completed: false },
    ]);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    toast.promise(
      new Promise<void>((resolve) => {
        addNote();
        resolve();
      }),
      {
        loading: "Adding note...",
        success: <span>{`${text} added`}</span>,
        error: <span>Failed to add note</span>,
      },
      {
        duration: 8000,
      }
    );
    setText("");
  }

  function handleDelete(id: string) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    toast.success("Note deleted");
  }

  function toggleNote(id: string) {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, completed: !note.completed } : note
      )
    );
  }

  return (
    <div
      className={`h-full container-fluid justify-content-center align-items-center ${
        darkTheme ? "bg" : ""
      }`}
    >
      <div className="d-flex justify-content-evenly align-content-center w-100">
        <center className="mt-5 mb-5">
          <span className={`${darkTheme ? "text-light" : ""} header`}>
            <FaNoteSticky />
            <span> Stick Notes</span>
          </span>
        </center>
        <span>
          <IconButton
            onClick={toogleTheme}
            className={darkTheme ? "text-light" : ""}
            size="small"
          >
            {darkTheme ? <FaSun /> : <FaMoon />}
          </IconButton>
        </span>
      </div>

      <div className="row col-sm-10 d-flex gap-2">
        <Card
          className={`container ${
            !darkTheme ? "border" : ""
          } col-sm-5 p-5 me-1 rounded ${darkTheme ? "bg-black" : ""}`}
        >
          <TodoForm text={text} change={handleChange} submit={handleSubmit} />
        </Card>
        <Card
          className={`d-flex flex-column col-sm-5 ${
            !darkTheme ? "border" : ""
          } p-5 gap-2 rounded ${darkTheme ? "bg-black" : ""}`}
        >
          <span
            className={`text-center accordion mb-2 ${
              darkTheme ? "text-light" : ""
            }`}
          >
            <FaNoteSticky /> <span>Notes </span>
            <span className="badge bg-primary">{notes.length}</span>
          </span>
          {notes.length !== 0 && (
            <div className="d-flex justify-content-end">
              <span className={darkTheme ? "text-light accordion" : "accordion"}>
                Remove all{" "}
                <IconButton color="error" size="small" onClick={() => setNotes([])}>
                  <FaTrashCan />
                </IconButton>{" "}
              </span>
            </div>
          )}
          <ul className="list-group flex-column">
            {notes.length === 0 ? (
              <li className={`list-group-item ${darkTheme ? "text-light" : ""}`}>
                No Notes available
              </li>
            ) : (
              notes.map((note) => (
                <ListItem
                  key={note.id}
                  id={note.id}
                  toggle={toggleNote}
                  completed={note.completed}
                  title={note.title}
                  onDelete={handleDelete}
                />
              ))
            )}
          </ul>
        </Card>
      </div>
    </div>
  );
}

export default App;

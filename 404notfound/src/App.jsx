import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import NoteDetails from "./pages/NoteDetails";
import { useState } from "react";
import Weather from "./pages/Weather";
import Base from "./pages/Base";



function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  const addNote = (note) => {
    note.id = Date.now();
    setNotes([...notes, note]);

    localStorage.setItem("notes", JSON.stringify([...notes, note]));
  };

  const deleteNote = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId));

    localStorage.setItem(
      "notes",
      JSON.stringify(notes.filter((note) => note.id !== noteId))
    );
  };

  const updateNote = (noteId, updatedNote) => {
    setNotes(notes.map((note) => (note.id === noteId ? updatedNote : note)));
  };

  const router = createBrowserRouter([
    {
      // path: "/",
      errorElement: <ErrorPage />,
      children: [

        {
          path: "/",
          element: <Base />
        },
        {
          path: "/notes",
          element: (
            <Home
              notes={notes}
              addNote={addNote}
              deleteNote={deleteNote}
              updateNote={updateNote}
            />
          ),
        },
        {
          path: "/note/:noteId",
          element: <NoteDetails />,
          loader: ({ params }) => {
            return notes.find((note) => note.id === Number(params.noteId));
          },
        },
        {
          path: "/weather",
          element: <Weather />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

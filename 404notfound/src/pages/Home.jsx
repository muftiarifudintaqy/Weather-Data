import PropTypes, { func } from "prop-types";
import React, { useState } from "react";
import Note from "../components/Note";

function Home({ notes, addNote, deleteNote, updateNote }) {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  function submitHandler(e) {
    e.preventDefault();

    const note = {
      title: title,
      content: content,
    };

    if (isEditing) {
      note.id = id;
      updateNote(id, note);
      setIsEditing(false);
    } else {
      addNote(note);
    }

    setId(0);
    setTitle("");
    setContent("");
  }

  function editHandler(note) {
    setId(note.id);
    setTitle(note.title);
    setContent(note.content);
    setIsEditing(true);
  }

  function cancelHandler() {
    setId(0);
    setTitle("");
    setContent("");
    setIsEditing(false);
  }
  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <input
          type="hidden"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="content">content</label>
        <textarea
          id="content"
          name="content"
          placeholder="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className={"btn-primary" + (isEditing ? " bg-blue" : "")}
        >
          {isEditing ? "Update" : "Add"} Note
        </button>
        {isEditing && (
          <button
            type="btn-secondary"
            className="btn-secondary"
            onClick={cancelHandler}
          >
            Cencel
          </button>
        )}
      </form>
      <section>
        <h1>My Notes :</h1>
        {notes.length === 0 && <p className="no-notes">No notes found</p>}
        {notes.map((note, index) => (
          <Note
            key={index}
            title={note.title}
            content={note.content}
            to={`/note/${note.id}`}
            onEdit={() => editHandler(note)}
            onDelete={() => deleteNote(note.id)}
          />
        ))}
      </section>
    </React.Fragment>
  );
}

Home.propTypes = {
  notes: PropTypes.array.isRequired,
  addNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
  updateNote: PropTypes.func.isRequired,
};

export default Home;

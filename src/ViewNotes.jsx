import { Link } from "react-router-dom";
import { notes } from "./NotesData";
import { useState } from "react";

function ViewNotes() {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredNotes = notes.filter((note) => {

  const searchText = searchTerm.toLowerCase();

  return (
    note.title.toLowerCase().includes(searchText) ||
    note.description.toLowerCase().includes(searchText)
  );

});
  return (
    <div className="notes-page">

      <section className="notes-hero">

        <span className="notes-badge">
          MIO Learning Portal
        </span>

        <h1>
          Course <span>Notes</span>
        </h1>

        <p>
          Access all lecture notes, code examples and learning resources
          organized by date.
        </p>

      </section>

      <section className="notes-container">

        <div className="notes-header">

          <h2>All Notes</h2>

          <input
            type="text"
            placeholder="Search notes..."
            className="notes-search"
              value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
          />

        </div>

        <div className="notes-grid">

          {filteredNotes.map((note) => (
            <div className="note-card" key={note.id}>

              <div className="note-top">

                <span className="note-date">
                  {note.date}
                </span>

              </div>

              <h3>{note.title}</h3>

              <p>{note.description}</p>

             <Link
  to={`/notes/${note.slug}`}
  className="read-btn"
>
  Read Notes →
</Link>

            </div>
          ))}
          {
  filteredNotes.length === 0 && (
    <div className="no-notes-found">
      No matching notes found.
    </div>
  )
}

        </div>

      </section>

    </div>
  );
}

export default ViewNotes;
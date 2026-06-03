
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { notes } from "./NotesData";
import { useState } from "react";


function NoteDetails() {
  const navigate = useNavigate()
const [popup, setPopup] = useState(null);
  const handleFeedback = (type) => {
  if (type === "up") {
    setPopup("up");
  } else {
    setPopup("down");
  }

};

const closePopup = () => {
  setPopup(null);
};

  const { slug } = useParams();

  const note = notes.find(
    item => item.slug === slug
  );

  if (!note) {
    return (
      <div className="note-detail-error">
        Note Not Found
      </div>
    );
  }

  return (
    <div className="note-detail-page">

         <button
      className="back-btn"
      onClick={() => navigate(-1)}
    >
      ← Back
    </button>

      <div className="note-detail-container">

        <span className="note-detail-date">
          {note.date}
        </span>

        <h1 className="note-detail-title">
          {note.title}
        </h1>

        <p className="note-detail-description">
          {note.description}
        </p>

        <div className="note-content">

  {note.content.map((item, index) => {

    switch(item.type){

      case "heading":
        return <h2 key={index}>{item.text}</h2>;

      case "paragraph":
        return <p key={index}>{item.text}</p>;

      case "image":
        return (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            className="note-image"
          />
        );

      case "code":
        return (
          <pre key={index} className="code-box">
            <code>{item.text}</code>
          </pre>
        );

      case "output":
        return (
          <div
            key={index}
            className="output-box"
            dangerouslySetInnerHTML={{
              __html: item.html || item.text
            }}
          />
        );

      case "list":
        return (
          <ul key={index}>
            {item.items.map((listItem, i) => (
              <li key={i}>{listItem}</li>
            ))}
          </ul>
        );

      case "summary":
        return (
          <div key={index} className="summary-box">
            <h3>Lecture Summary</h3>

            <ul>
              {item.items.map((summary, i) => (
                <li key={i}>✔ {summary}</li>
              ))}
            </ul>
          </div>
        );
        case "feedback":
  return (
    <div key={index} className="feedback-box">
      <p>Was this note helpful?</p>

      <button className="thumb-btn"onClick={() => handleFeedback("up")}>👍 Yes</button>
      <button className="thumb-btn" onClick={() => handleFeedback("down")}>👎 No</button>
    </div>
  );


      default:
        return null;
    }

  })}

</div>

      </div>
      
{popup && (
  <div className="popup-overlay">
    <div className="popup-box">

      {/* ❌ CLOSE BUTTON */}
      <button className="popup-close" onClick={closePopup}>
        ×
      </button>

      {popup === "up" ? (
        <>
          <h2>🫡 Thank You!</h2>
          <p>Your feedback helps us improve the learning experience.</p>
        </>
      ) : (
        <>
          <h2>😔 Sorry for that!</h2>
          <p>
            We appreciate your honesty. Please share your thoughts in class so we can improve.
          </p>
        </>
      )}

    </div>
  </div>
)}

    </div>
  );
}

export default NoteDetails;
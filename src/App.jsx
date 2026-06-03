import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ViewNotes from "./ViewNotes";
import NoteDetails from "./NotesDetails";
import ScrollToTop from "./scrolltotop";
import CourseOverview from "./CourseOverview";
function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allnoteshere" element={<ViewNotes />} />
        <Route path="/courseoverview" element={<CourseOverview />} />
        <Route
          path="/notes/:slug"
          element={<NoteDetails />}
        />
      </Routes>
    </BrowserRouter>
  )

}
export default App
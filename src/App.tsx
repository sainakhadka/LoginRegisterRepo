import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";

import RegStudent from "./AuthReg/Regstudent";
import RegMentor from "./AuthReg/Regmentor";

function App() {
  return (
    <Router>
      <Routes>

        <Route
          path="/"
          element={
            <>
              <Nav />
              <Home />
            </>
          }
        />

        <Route path="/register/student" element={<RegStudent />} />
        <Route path="/register/mentor" element={<RegMentor />} />

      </Routes>
    </Router>
  );
}

export default App;



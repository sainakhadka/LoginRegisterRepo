import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reg from "./pages/Reg";
import StudentRegister from "./authReg/student";
import MentorRegister from "./authReg/mentor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Reg />} />
        <Route path="/register" element={<Reg />} />
        <Route path="/register/student" element={<StudentRegister />} />
        <Route path="/register/mentor" element={<MentorRegister />} />
      </Routes>
    </Router>
  );
}

export default App;

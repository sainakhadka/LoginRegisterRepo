import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reg from "./pages/Reg";
import StudentRegister from "./authReg/student";
import MentorRegister from "./authReg/mentor";

import StudentLogin from "./authLog/studentL";
import MentorLogin from "./authLog/mentorL";
import AdminLogin from "./authLog/adminL";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Reg />} />
        <Route path="/register" element={<Reg />} />
        <Route path="/register/student" element={<StudentRegister />} />
        <Route path="/register/mentor" element={<MentorRegister />} />

        <Route path="/login/student" element={<StudentLogin />} />
        <Route path="/login/mentor" element={<MentorLogin />} />
        <Route path="/login/admin" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;

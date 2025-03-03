import { Route, Routes } from "react-router-dom";
import Student from "./pages/Student";
import CreateStudentInfo from "./pages/CreateStudentInfo";
import UpdateStudentInfo from "./pages/UpdateStudentInfo";
import Navbar from "./pages/Navbar";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}></Route>
      <Route path="/studentData" element={<Student />}></Route>
      <Route path="/create" element={<CreateStudentInfo />}></Route>
      <Route path="/edit/:id" element={<UpdateStudentInfo />}></Route>
    </Routes>
  );
};

export default Allroutes;

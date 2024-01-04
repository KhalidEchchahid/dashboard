import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";

import Dashboard from "scenes/dashboard";
import Students from "scenes/students/Students";
import Professors from "scenes/professors/Professors";
import StudentsPages from "scenes/students/StudentsPages";
import StudentDetails from "scenes/students/studentDetails/StudentDetails";
import ProfessorDetails from "scenes/professors/professorDetails/ProfessorDetails";
import Announcements from "scenes/annoncements/Announcements";
import AllPosts from "scenes/posts/AllPosts";
import Blog from "scenes/blog/Blog";
import Auth from "scenes/Auth/Auth";
import { useEffect } from "react";
function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const [admin , setAdmin] = useState(localStorage.getItem("admin"))

  useEffect(()=>{
    setAdmin(localStorage.getItem("admin"))
  },[])
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
         
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              {/* <Route path="/students" element={<StudentsPages />} />
              <Route path="/studentDetails/:id" element={<StudentDetails />} />
              <Route path="/studentsTEST" element={<Students />} />
              <Route path="/professors" element={<Professors />} />
              <Route
                path="/professorDetails/:id"
                element={<ProfessorDetails />}
              />
              <Route path="/posts" element={<AllPosts />} />
              <Route path="/announcements" element={<Announcements />} /> */}
              <Route path="/blog" element={<Blog />} />
            </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

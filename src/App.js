import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseCard from "./components/CourseCard";
import CourseInfo from "./components/CourseInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact={true}
          path="/"
          element={
            <div>
              <CourseCard />
            </div>
          }
        ></Route>
        <Route exact={true} path="/courses/:slug" element={<CourseInfo />} />
      </Routes>
    </Router>
  );
}

export default App;

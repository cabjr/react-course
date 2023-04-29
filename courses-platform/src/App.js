import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import CourseList from './components/CourseList';
import Course from './components/Course';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/course/:id" element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'

import Landing from './Components/Landing';
import Courses from './Components/Courses';
import CourseDetails from './Components/CourseDetails';
import First from './Components/First';
import TestFetch from './Components/TestFetch';

import { Provider } from 'react-redux';
import store from './store';

import MainLayout from './Layouts/MainLayout'


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Routes>  
            <Route path="/" element={<Landing />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/details" element={<CourseDetails />} />
            <Route path="/first" element={<First />} />
            <Route path="/testfetch" element={<TestFetch />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
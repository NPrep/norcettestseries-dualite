import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ExamTestSeries from './pages/ExamTestSeries';
import SubjectTestSeries from './pages/SubjectTestSeries';
import MockTests from './pages/MockTests';
import PYQ from './pages/PYQ';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Courses from './pages/Courses';
import { RouterWrapper } from './next/RouterWrapper';

type AppProps = {
  initialPath?: string;
};

function App({ initialPath = '/' }: AppProps) {
  return (
    <RouterWrapper initialPath={initialPath}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          {/* Exam Specific Routes */}
          <Route path="norcet-test-series" element={<ExamTestSeries type="norcet" />} />
          <Route path="rrb-staff-nurse-test-series" element={<ExamTestSeries type="rrb" />} />
          <Route path="esic-nursing-officer-test-series" element={<ExamTestSeries type="esic" />} />
          <Route path="state-staff-nurse-test-series" element={<ExamTestSeries type="state" />} />
          
          {/* Hubs */}
          <Route path="courses" element={<Courses />} />
          <Route path="subject-wise-nursing-test-series" element={<SubjectTestSeries />} />
          <Route path="nursing-mock-tests" element={<MockTests />} />
          <Route path="nursing-pyq-and-tests" element={<PYQ />} />
          
          {/* Blog Routes */}
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          
          {/* Fallback for other routes mentioned in footer/nav to avoid 404 in demo */}
          <Route path="nursing-officer-exams-in-india" element={<Home />} />
          <Route path="subject-tests/:subjectId" element={<SubjectTestSeries />} />
        </Route>
      </Routes>
    </RouterWrapper>
  );
}

export default App;

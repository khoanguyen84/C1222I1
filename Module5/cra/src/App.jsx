import React from 'react';
import './App.css';
import Banner from './components/layout/Banner';
import Narbar from './components/layout/Narbar';
import PostList from './components/LearningUseEffect/PostList';
import PlayList from './components/LearningUseState/Index';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';
import { Route, Routes } from 'react-router';
import PostDetail from './components/LearningUseEffect/PostDetail';
import NotFound from './components/layout/NotFound';
import StudentList from './components/ReactHookForm/StudentList';
import CreateStudent from './components/ReactHookForm/CreateStudent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer/>
      <Banner />
      <Narbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/post-list' element={<PostList/>}/>
        <Route path='/post-detail/:postid' element={<PostDetail/>}/>
        <Route path='/play-list' element={<PlayList/>}/>
        <Route path='/student/list' element={<StudentList/>}/>
        <Route path='/student/create' element={<CreateStudent/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

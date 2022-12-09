import './style.scss';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import AddPostForm from './components/Posts/AddPostForm';
import EditPostForm from './components/Posts/EditPostForm';
import PostDescription from './components/Posts/PostDescription';

export default function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <div className='main-content'>
          <Routes>
            <Route index element={<Posts />} />
            <Route path='posts'>
              <Route path='add' element={<AddPostForm />} />
              <Route path='edit/:id' element={<EditPostForm />} />
              <Route path='view/:id' element={<PostDescription />} />
            </Route>
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

import './style.scss';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import AddPostForm from './components/Posts/AddPostForm';
import EditPostForm from './components/Posts/EditPostForm';

export default function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Posts />} />
          <Route path='posts'>
            <Route path='add' element={<AddPostForm />} />
            <Route path='edit/:id' element={<EditPostForm />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

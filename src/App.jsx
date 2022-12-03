import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AllPosts from './screen/AllPosts/AllPosts';
import CreateUpdatePost from './screen/CreareUpdatePost/CreateUpdatePost';

export default function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<AllPosts />} />
          <Route path='post' element={<CreateUpdatePost />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

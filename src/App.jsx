import './App.scss';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import PostView from './components/Posts/PostView/PostView';
import PostForm from './components/Posts/PostForm/PostForm';

export default function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <div className='main-content'>
          <Routes>
            <Route index element={<Posts />} />
            <Route path='posts'>
              <Route path='edit/:id' element={<PostForm />} />
              <Route path='add' element={<PostForm />} />
              <Route path='view/:id' element={<PostView />} />
            </Route>
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

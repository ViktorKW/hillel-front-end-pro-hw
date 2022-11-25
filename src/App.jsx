import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import TodoDetails from './components/Todo/components/TodoDetails/TodoDetails';
import Appointments from './Pages/Appointments/Appointments';
import Clients from './Pages/Clients/Clients';
import Doctors from './Pages/Doctors/Doctors';
import Events from './Pages/Events/Events';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import TodosPage from './Pages/TodosPage/TodosPage';
import './style.scss';

export default function App() {
  const empty_space = <canvas className='empty-space' height={'20px'}></canvas>;
  return (
    <div className='app'>
      <NavBar />
      {empty_space}
      <Routes>
        <Route index element={<Home />} />
        <Route path='todos' element={<TodosPage />}></Route>
        <Route path='todos/:id' element={<TodoDetails />} />
        <Route path='appointments' element={<Appointments />} />
        <Route path='clients' element={<Clients />} />
        <Route path='doctors' element={<Doctors />} />
        <Route path='events' element={<Events />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

import { Route, Routes } from 'react-router-dom';

import Login from 'pages/Login';
import Register from 'pages/Register';
import Сontacts from 'pages/Сontacts';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Сontacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
};

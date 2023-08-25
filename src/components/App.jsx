import { Route, Routes } from 'react-router-dom';

import Login from 'pages/Login';
import Register from 'pages/Register';
import Сontacts from 'pages/Сontacts';
import { SharedLayout } from './SharedLayout/SharedLayout';
import PublicGuards from 'guards/PublicGuards';
import PrivateGuard from 'guards/PrivateGuard';
import Logout from 'pages/Logout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <PrivateGuard>
              <Сontacts />
            </PrivateGuard>
          }
        />
        <Route
          path="/logout"
          element={
            <PrivateGuard>
              <Logout />
            </PrivateGuard>
          }
        />
        <Route
          path="/login"
          element={
            <PublicGuards>
              <Login />
            </PublicGuards>
          }
        />
        <Route
          path="/register"
          element={
            <PublicGuards>
              <Register />
            </PublicGuards>
          }
        />
      </Route>
    </Routes>
  );
};

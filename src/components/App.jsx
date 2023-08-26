import { Navigate, Route, Routes } from 'react-router-dom';

import Login from 'pages/Login';
import Register from 'pages/Register';
import Сontacts from 'pages/Сontacts';
import { SharedLayout } from './SharedLayout/SharedLayout';
import PublicGuards from 'guards/PublicGuards';
import PrivateGuard from 'guards/PrivateGuard';
import Logout from 'pages/Logout';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { refreshUser } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  console.log(isRefreshing);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

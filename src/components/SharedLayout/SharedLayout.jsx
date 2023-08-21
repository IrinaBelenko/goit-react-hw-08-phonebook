import { NavLink, Outlet } from 'react-router-dom';

import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <div>
          <div>
            <NavLink to="/" end>
              Contacts
            </NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </div>
        </div>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

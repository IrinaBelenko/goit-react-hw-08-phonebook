import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';

const PrivateGuard = ({ children }) => {
  const isAuth = useSelector(selectIsLoggedIn);
  const location = useLocation();

  return isAuth ? children : <Navigate to="/login" state={location} />;
};

export default PrivateGuard;

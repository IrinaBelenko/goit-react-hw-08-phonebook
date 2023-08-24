import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';

const PublicGuards = ({ children }) => {
  const isAuth = useSelector(selectIsLoggedIn);
  const location = useLocation();

  return !isAuth ? children : <Navigate to={location.state ?? '/'} />;
};

export default PublicGuards;

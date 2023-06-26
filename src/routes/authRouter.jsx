import { useLocation, Navigate } from 'react-router-dom';

const AuthRouter = ({ children }) => {
  const token = localStorage.getItem('token')
  const { pathname } = useLocation()
  if (pathname === '/login') {
    return children
  }
  if (!token) {
    return <Navigate to='/login' />
  }
  else { return (children) }
}

export default AuthRouter;

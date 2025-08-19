import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import DashBoard from '../pages/dashboard/DashBoard';
import Profile from '../pages/profile/Profile';
import Login from '../pages/auth/Login';
import Verify from '../pages/auth/otp'
import HrProfiles from '../pages/hrProfiles/hrProfiles'
import { useAuth } from '../Components/auth/AuthContext';

function Approutes() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return null;

  const AuthRoutes = () => (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/verification' element={<Verify />} />
      <Route path='*' element={<Navigate to='/login' />} />
    </Routes>
  );

  const PropertyRoutes = () => (
    <Routes>

      <Route path='/' element={<MainLayout />}>
        <Route index element={<DashBoard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/hrProfiles' element={<HrProfiles />} />
        <Route path='/department' element={<Profile />} />
        <Route path='/employee' element={<Profile />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  )
  return isAuthenticated ? <PropertyRoutes /> : <AuthRoutes />
}

export default Approutes;

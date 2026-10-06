import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

// Layouts
import UserLayout from './layouts/UserLayout';
import OwnerLayout from './layouts/OwnerLayout';

// Pages
import Landing from './pages/Landing';
import Login from './pages/Login';

// User Pages
import UserHome from './pages/user/UserHome';
import UserOrders from './pages/user/UserOrders';
import UserAnalytics from './pages/user/UserAnalytics';
import UserSettings from './pages/user/UserSettings';

// Owner Pages
import OwnerDashboard from './pages/owner/OwnerDashboard';
import OwnerOrders from './pages/owner/OwnerOrders';
import OwnerMenu from './pages/owner/OwnerMenu';
import OwnerReviews from './pages/owner/OwnerReviews';
import OwnerAnalytics from './pages/owner/OwnerAnalytics';

const ProtectedRoute = ({ children, allowedRole }) => {
  const { role } = useAuth();
  if (!role) return <Navigate to="/login" replace />;
  if (allowedRole && role !== allowedRole) return <Navigate to="/" replace />;
  return children;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/user" element={<ProtectedRoute allowedRole="USER"><UserLayout /></ProtectedRoute>}>
            <Route index element={<Navigate to="home" replace />} />
            <Route path="home" element={<UserHome />} />
            <Route path="orders" element={<UserOrders />} />
            <Route path="analytics" element={<UserAnalytics />} />
            <Route path="settings" element={<UserSettings />} />
          </Route>

          <Route path="/owner" element={<ProtectedRoute allowedRole="OWNER"><OwnerLayout /></ProtectedRoute>}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<OwnerDashboard />} />
            <Route path="orders" element={<OwnerOrders />} />
            <Route path="menu" element={<OwnerMenu />} />
            <Route path="reviews" element={<OwnerReviews />} />
            <Route path="analytics" element={<OwnerAnalytics />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

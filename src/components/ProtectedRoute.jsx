// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function ProtectedRoute({ children }) {
  const { usuario, cargando } = useAuth();
  if (cargando) return <div>Cargando...</div>;
  return usuario ? children : <Navigate to="/login" />;
}

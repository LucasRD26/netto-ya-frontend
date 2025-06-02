import { useEffect, useState } from 'react';
import api from '../services/api';
import Loader from '../components/Loader/Loader';

export default function PerfilPage() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    api.get('/usuarios/me')
      .then(res => setUsuario(res.data))
      .catch(() => setUsuario(null));
  }, []);

  if (!usuario) return <Loader />;

  return (
    <div className="container mt-5">
      <h2>Mi Perfil</h2>
      <div className="card p-4">
        <p><strong>Nombre:</strong> {usuario.nombre}</p>
        <p><strong>Email:</strong> {usuario.email}</p>
        <p><strong>Teléfono:</strong> {usuario.telefono}</p>
        <p><strong>Rol:</strong> {usuario.rol}</p>
        <p><strong>Dirección:</strong> {usuario.direccion}</p>
        <p><strong>Valoración:</strong> {usuario.valoracion || 'Sin calificación'}</p>
      </div>
    </div>
  );
}

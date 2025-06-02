import { useEffect, useState } from 'react';
import api from '../services/api';
import Loader from '../components/Loader/Loader';

export default function ReservasPage() {
  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/reservas')
      .then(res => setReservas(res.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="container mt-4">
      <h2>Mis Reservas</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Servicio</th>
            <th>Fecha</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map(r => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.servicio?.nombre || '-'}</td>
              <td>{r.fechaHoraInicio?.split('T')[0]}</td>
              <td>{r.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

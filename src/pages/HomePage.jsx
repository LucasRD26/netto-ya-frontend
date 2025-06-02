import { useEffect, useState } from 'react';
import api from '../services/api';
import CardServicio from '../components/CardServicio/CardServicio';
import CardLimpieza from '../components/CardLimpieza/CardLimpieza';
import Loader from '../components/Loader/Loader';

export default function HomePage() {
  const [servicios, setServicios] = useState([]);
  const [limpiadores, setLimpiadores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.get('/servicios'),
      api.get('/usuarios?rol=LIMPIADOR') // Ajusta según tu API
    ])
      .then(([resServicios, resLimp]) => {
        setServicios(resServicios.data);
        setLimpiadores(resLimp.data);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="container mt-4">
      <h2>Servicios Disponibles</h2>
      <div className="row">
        {servicios.map(servicio => (
          <CardServicio key={servicio.id} servicio={servicio} />
        ))}
      </div>
      <h2 className="mt-5">Limpiadores Destacados</h2>
      <div className="row">
        {limpiadores.map(limpiador => (
          <CardLimpieza key={limpiador.id} limpiador={limpiador} />
        ))}
      </div>
    </div>
  );
}

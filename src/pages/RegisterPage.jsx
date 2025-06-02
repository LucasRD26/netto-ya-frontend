import { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    contrasena: '',
    rol: 'CLIENTE',
    direccion: ''
  });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post('/auth/register', form);
      alert('Usuario registrado con éxito');
      navigate('/login');
    } catch (err) {
      alert('Error al registrar usuario');
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="col-md-6 mx-auto">
        <h2>Registro</h2>
        <input name="nombre" className="form-control mb-3" placeholder="Nombre" onChange={handleChange} required />
        <input name="email" type="email" className="form-control mb-3" placeholder="Email" onChange={handleChange} required />
        <input name="telefono" className="form-control mb-3" placeholder="Teléfono" onChange={handleChange} required />
        <input name="contrasena" type="password" className="form-control mb-3" placeholder="Contraseña" onChange={handleChange} required />
        <select name="rol" className="form-control mb-3" onChange={handleChange}>
          <option value="CLIENTE">Cliente</option>
          <option value="LIMPIADOR">Limpiador</option>
        </select>
        <input name="direccion" className="form-control mb-3" placeholder="Dirección" onChange={handleChange} />
        <button type="submit" className="btn btn-success w-100">Registrarse</button>
      </form>
    </div>
  );
}

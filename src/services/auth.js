// src/services/auth.js
import api from './api';

// Iniciar sesión y guardar el token
export async function login(email, password) {
  const res = await api.post('/auth/login', { email, password });
  localStorage.setItem('token', res.data.token);
  return res.data;
}

// Registrar usuario
export async function register(datosUsuario) {
  const res = await api.post('/auth/register', datosUsuario);
  return res.data;
}

// Cerrar sesión
export function logout() {
  localStorage.removeItem('token');
}

// Verificar si hay sesión activa
export function isAuthenticated() {
  return !!localStorage.getItem('token');
}

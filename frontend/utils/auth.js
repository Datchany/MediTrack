import jwt_decode from 'jwt-decode';

export function getToken() {
  return localStorage.getItem('access_token');
}

export function getUserRole() {
  try {
    const token = getToken();
    const decoded = jwt_decode(token);
    return decoded.role || null;
  } catch {
    return null;
  }
}

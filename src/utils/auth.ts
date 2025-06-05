export const ADMIN_USER = 'vivek';
export const ADMIN_PASS = 'vivek';

export function login(username: string, password: string): boolean {
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    localStorage.setItem('adminLoggedIn', 'true');
    return true;
  }
  return false;
}

export function logout() {
  localStorage.removeItem('adminLoggedIn');
}

export function isLoggedIn(): boolean {
  return localStorage.getItem('adminLoggedIn') === 'true';
}

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

function ConditionalLogin({ estaLogueado }) {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Desafío 5: Lógica Condicional</h2>
      <p>Estado actual: {estaLogueado ? 'Sesión Iniciada ✅' : 'No logueado'}</p>
      
      {estaLogueado ? <LogoutButton /> : <LoginButton />}
    </div>
  );
}

export default ConditionalLogin;
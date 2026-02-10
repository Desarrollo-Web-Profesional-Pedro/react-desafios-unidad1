import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

function ConditionalLogin({ estaLogueado }) {
  return (
    <div>
      <p>Estado actual: {estaLogueado ? 'Logueado' : 'No logueado'}</p>
      
      {estaLogueado ? <LogoutButton /> : <LoginButton />}
    </div>
  );
}

export default ConditionalLogin;
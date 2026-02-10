import { useState } from 'react';
import ButtonToggle from './ButtonToggle';
import ConditionalLogin from './ConditionalLogin';
import './App.css';

function App() {
  // Estado para controlar el login (para demostrar el desafío 5)
  const [estaLogueado, setEstaLogueado] = useState(false);

  return (
    <div className="App">
      <h1>Ejercicio Práctico Unidad 1 - React</h1>
      <p>Por: Pedro - Desarrollo y Gestión de Software</p>
      
      {/* Desafío 3: Estado e Interacción */}
      <ButtonToggle />
      
      <hr style={{ margin: '40px 0', border: '1px solid #ddd' }} />
      
      {/* Desafío 5: Lógica Condicional */}
      <ConditionalLogin estaLogueado={estaLogueado} />
      
      {/* Botón de control para cambiar el estado (demo) */}
      <button 
        onClick={() => setEstaLogueado(!estaLogueado)}
        style={{ 
          marginTop: '20px', 
          padding: '8px 16px',
          backgroundColor: '#6c757d',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        🔄 Alternar estado de login (Demo)
      </button>
    </div>
  );
}

export default App;
import { useState } from 'react';
import ConditionalLogin from './ConditionalLogin';
import './App.css';

function App() {
  const [estaLogueado, setEstaLogueado] = useState(false);

  return (
    <div className="App">
      <h1>Desafío 5: Lógica Condicional</h1>
      
      <ConditionalLogin estaLogueado={estaLogueado} />
      
      <button onClick={() => setEstaLogueado(!estaLogueado)}>
        Cambiar estado
      </button>
    </div>
  );
}

export default App;
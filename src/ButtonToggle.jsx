import { useState } from 'react';

function ButtonToggle() {
  // 1. Declarar variable de estado
  const [textoBoton, setTextoBoton] = useState('Haz clic aquí');

  // 2. Función controladora de eventos
  const handleClick = () => {
    setTextoBoton(textoBoton === 'Haz clic aquí' 
      ? '¡Botón presionado!' 
      : 'Haz clic aquí'
    );
  };

  // 3. Pasar función al onClick SIN paréntesis
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Desafío 3: Estado e Interacción</h2>
      <button 
        onClick={handleClick}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        {textoBoton}
      </button>
    </div>
  );
}

export default ButtonToggle;
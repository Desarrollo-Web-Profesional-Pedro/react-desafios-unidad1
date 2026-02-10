function LogoutButton() {
  return (
    <button 
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}
    >
      🔒 Cerrar Sesión
    </button>
  );
}

export default LogoutButton;
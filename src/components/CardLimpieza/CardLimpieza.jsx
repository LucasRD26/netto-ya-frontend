export default function CardLimpieza({ limpiador, onSeleccionar }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow">
        <img
          src={limpiador.foto || "/assets/default-user.png"}
          className="card-img-top"
          alt={limpiador.nombre}
          style={{ objectFit: 'cover', height: '200px' }}
        />
        <div className="card-body">
          <h5 className="card-title">{limpiador.nombre}</h5>
          <p className="card-text">
            <span className="text-warning">★ {limpiador.valoracion || "Sin calificación"}</span>
          </p>
          <p className="card-text"><strong>Teléfono:</strong> {limpiador.telefono}</p>
          {onSeleccionar && (
            <button className="btn btn-primary" onClick={() => onSeleccionar(limpiador)}>
              Seleccionar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

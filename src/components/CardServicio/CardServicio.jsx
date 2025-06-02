export default function CardServicio({ servicio, onReservar }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow">
        <div className="card-body">
          <h5 className="card-title">{servicio.nombre}</h5>
          <p className="card-text">{servicio.descripcion}</p>
          <p className="card-text"><strong>Precio base:</strong> ${servicio.precioBase}</p>
          <p className="card-text"><strong>Duración:</strong> {servicio.duracionEstimada} horas</p>
          {onReservar && (
            <button className="btn btn-success" onClick={() => onReservar(servicio)}>
              Reservar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
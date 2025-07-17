import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

const VehiclesList = () => {
  const [vehicles, setVehicles] = useState([]);
  const { dispatch, store } = useGlobalReducer();

  useEffect(() => {
    fetch("https://www.swapi.tech/api/vehicles")
      .then(res => res.json())
      .then(data => setVehicles(data.results));
  }, []);

  const isFavorite = (vehicle) =>
    store.favorites.some(fav => fav.uid === vehicle.uid && fav.type === "vehicle");

  return (
    <div className="row">
      {vehicles.map(vehicle => (
        <div className="col-md-4" key={vehicle.uid}>
          <div className="card mb-3">
            <img
  src="https://static.wikia.nocookie.net/starwars/images/f/ff/Sandcrawler.png/revision/latest/scale-to-width-down/1000?cb=20130812001443"
  className="card-img-top"
  alt={vehicle.name}
/>
            <div className="card-body">
              <h5 className="card-title">{vehicle.name}</h5>
              <button
                className={`btn ${isFavorite(vehicle) ? "btn-danger" : "btn-warning"} me-2`}
                onClick={() =>
                  isFavorite(vehicle)
                    ? dispatch({ type: "remove_favorite", payload: { ...vehicle, type: "vehicle" } })
                    : dispatch({ type: "add_favorite", payload: { ...vehicle, type: "vehicle" } })
                }
              >
                {isFavorite(vehicle) ? "Quitar de favoritos" : "Guardar en favoritos"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VehiclesList;
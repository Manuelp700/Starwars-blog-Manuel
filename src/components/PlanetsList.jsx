import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

const PlanetsList = () => {
  const [planets, setPlanets] = useState([]);
  const { dispatch, store } = useGlobalReducer();

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets")
      .then(res => res.json())
      .then(data => setPlanets(data.results));
  }, []);

  const isFavorite = (planet) =>
    store.favorites.some(fav => fav.uid === planet.uid && fav.type === "planet");

  return (
    <div className="row">
      {planets.map(planet => (
        <div className="col-md-4" key={planet.uid}>
          <div className="card mb-3">
            <img
  src="https://static.wikia.nocookie.net/esstarwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20100723184830"
  className="card-img-top"
  alt={planet.name}
/>
            <div className="card-body">
              <h5 className="card-title">{planet.name}</h5>
              <button
                className={`btn ${isFavorite(planet) ? "btn-danger" : "btn-warning"} me-2`}
                onClick={() =>
                  isFavorite(planet)
                    ? dispatch({ type: "remove_favorite", payload: { ...planet, type: "planet" } })
                    : dispatch({ type: "add_favorite", payload: { ...planet, type: "planet" } })
                }
              >
                {isFavorite(planet) ? "Quitar de favoritos" : "Guardar en favoritos"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlanetsList;
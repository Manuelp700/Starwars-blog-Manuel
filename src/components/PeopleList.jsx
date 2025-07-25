import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

const PeopleList = () => {
  const [people, setPeople] = useState([]);
  const { dispatch, store } = useGlobalReducer();

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
      .then(res => res.json())
      .then(data => setPeople(data.results));
  }, []);

  const isFavorite = (person) =>
    store.favorites.some(fav => fav.uid === person.uid && fav.type === "person");

  return (
    <div className="row">
      {people.map(person => (
        <div className="col-md-4" key={person.uid}>
          <div className="card mb-3">
            <img
  src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/02/luke-skywalker-grogu-the-book-of-boba-fett.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5"
  className="card-img-top"
  alt={person.name}
/>
            <div className="card-body">
              <h5 className="card-title">{person.name}</h5>
              <button
                className={`btn ${isFavorite(person) ? "btn-danger" : "btn-warning"} me-2`}
                onClick={() =>
                  isFavorite(person)
                    ? dispatch({ type: "remove_favorite", payload: { ...person, type: "person" } })
                    : dispatch({ type: "add_favorite", payload: { ...person, type: "person" } })
                }
              >
                {isFavorite(person) ? "Quitar de favoritos" : "Guardar en favoritos"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PeopleList;
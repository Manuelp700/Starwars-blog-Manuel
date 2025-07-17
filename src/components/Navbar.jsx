import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
    const { store } = useGlobalReducer();

    return (
        <nav className="navbar navbar-dark bg-dark shadow">
            <div className="container">
                <Link to="/" className="d-flex align-items-center gap-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" alt="Star Wars Logo" style={{height: "40px"}} />
                    <span className="navbar-brand mb-0 h1 text-warning">Star Wars Blog</span>
                </Link>
                <div className="ml-auto">
                    <div className="dropdown">
                        <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Favoritos <span className="badge bg-dark">{store.favorites.length}</span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            {store.favorites.length === 0 && <li className="dropdown-item">Sin favoritos</li>}
                            {store.favorites.map((fav, idx) => (
                                <li key={idx} className="dropdown-item">{fav.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};
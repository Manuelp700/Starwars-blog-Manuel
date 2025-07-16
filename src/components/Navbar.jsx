import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
    const { store } = useGlobalReducer();

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <Link to="/">
                    <span className="navbar-brand mb-0 h1">Star Wars Blog</span>
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
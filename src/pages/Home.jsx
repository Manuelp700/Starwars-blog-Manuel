import PeopleList from "../components/PeopleList.jsx";
import VehiclesList from "../components/VehiclesList.jsx";
import PlanetsList from "../components/PlanetsList.jsx";

export const Home = () => {
    return (
        <div className="container mt-5">
            <h1 className="mb-4">Personajes de Star Wars</h1>
            <PeopleList />
            <h1 className="mb-4 mt-5">Vehículos de Star Wars</h1>
            <VehiclesList />
            <h1 className="mb-4 mt-5">Planetas de Star Wars</h1>
            <PlanetsList />
        </div>
    );
};
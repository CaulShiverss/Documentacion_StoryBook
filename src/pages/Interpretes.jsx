import { Link } from "react-router-dom";
import peliculas from "../data/peliculas";
import List from "../components/List";

/**
 * Interpretes component - Displays a list of actors from available movies
 * 
 * @component
 * @returns {JSX.Element} A grid layout displaying all actors from the movies collection,
 * with each actor rendered as a clickable card linking to their detail page
 * 
 * @description
 * Renders a page showing all available actors/interpretes from the movie collection.
 * Each actor is displayed in a responsive grid (1 column on mobile, 2 on tablets, 4 on desktop)
 * and wrapped in a Link component that navigates to the actor's detail page.
 * 
 * @requires Uses the `peliculas` array from component context/props (assumed to be available)
 * @requires List component for displaying actor information cards
 * @requires React Router Link component for navigation
 * 
 * @note The key prop uses a combination of pelicula.id and idInterprete to ensure
 * unique identification of each actor card in the grid
 */

function Interpretes() {
  return (
    <>
        <h2 className="text-xl font-semibold mb-4">Listado de intérpretes</h2>
        <p className="text-gray-700 mb-6">
            Estos son los intérpretes disponibles de nuestras películas:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-8">
            {peliculas.map((pelicula) =>
                pelicula.actores.map((actor, idInterprete) => (
                    <Link 
                        key={`${pelicula.id}-${idInterprete}`} 
                        to={`/detalle/pelicula/${pelicula.id}/interprete/${idInterprete}`}
                        aria-label={`Ver detalles del intérprete ${actor.nombre}`}>
                        <List
                            // key={idInterprete} // No es necesario aquí porque el key está en el Link
                            nombre={actor.nombre}
                            foto={actor.imagen}
                            esNota10={pelicula.nota === 10}
                        >
                            {actor.biografia}
                        </List>
                    </Link>
                ))
            )}
        </div>
    </>
  );
}
export default Interpretes;
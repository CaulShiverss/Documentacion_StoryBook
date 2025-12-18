import { Link } from "react-router-dom";
import peliculas from "../data/peliculas";
import List from "../components/List";
import { useState } from "react";
import { useMemo } from "react";
import SearchBar from "../components/SearchBar";

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
  const [searchTerm, setSearchTerm] = useState("");

  const allInterpretes = peliculas.flatMap((pelicula) =>
    pelicula.actores.map((actor, idInterprete) => ({
        ...actor,
      idPelicula: pelicula.id, // Necesario para el Link
      idInterprete: idInterprete, // Necesario para el Link
      esNota10: pelicula.nota === 10, // Ejemplo de dato adicional
    }))
  );

    // Usamos useMemo para memorizar la lista filtrada.
  // Solo se recalcula si 'searchTerm' cambia.
  const filteredInterpretes = useMemo(() => {
    if (!searchTerm) {
      return allInterpretes;
      // Si no hay término, devuelve la lista completa
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return allInterpretes.filter((interprete) =>
      // Filtra por el nombre de la película
      interprete.nombre.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm]);

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Listado de intérpretes</h2>
      <p className="text-gray-700 mb-6">
        Estos son los intérpretes disponibles de nuestras películas:
      </p>

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Buscar películas por nombre..."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-8">
        
        {filteredInterpretes.length > 0 ? (
          filteredInterpretes.map((actor, idInterprete) => (
            <Link
              key={`${actor.idPelicula}-${idInterprete}`}
              to={`/detalle/pelicula/${actor.idPelicula}/interprete/${idInterprete}`}
              aria-label={`Ver detalles del intérprete ${actor.nombre}`}
            >
              <List
                // key={idInterprete} // No es necesario aquí porque el key está en el Link
                nombre={actor.nombre}
                foto={actor.imagen}
                esNota10={actor.esNota10 === 10}
              >
                {actor.biografia}
              </List>
            </Link>
          ))
        ) : (
          // Mensaje si no hay resultados
          <p className="col-span-full text-center text-gray-500p-4">
            No se encontraron películas con el término `{searchTerm}`.
          </p>
        )}
      </div>
    </>
  );
}
export default Interpretes;

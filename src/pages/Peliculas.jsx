import { Link } from "react-router-dom";
import peliculas from "../data/peliculas";
import List from "../components/List";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { useMemo } from "react";

/**
 * Peliculas component.
 *
 * Renders a responsive grid of movies using an externally provided `peliculas` array.
 * Each movie is wrapped in a navigation Link to `/detalle/pelicula/:id` and uses a
 * List component to display the poster (prop `foto`) and title (prop `nombre`); the
 * List children are used to display the movie's classification.
 *
 * Expected shape of each movie object in `peliculas`:
 *   {
 *     id: string|number,
 *     nombre: string,
 *     cartelera: string,   // image URL or src for the poster
 *     clasificacion: string
 *   }
 *
 * Requirements:
 * - `peliculas` must be defined and iterable in the component scope.
 * - `Link` (react-router) and `List` components must be available/imported.
 *
 * Notes:
 * - Uses the movie `id` as the React `key` on the Link to ensure stable list rendering.
 * - Consider handling loading / empty states and validating image sources for accessibility.
 *
 * @component
 * @function Peliculas
 * @returns {JSX.Element} A fragment containing a header, description, and a movie grid.
 */

function Peliculas() {
  const [searchTerm, setSearchTerm] = useState("");

  // Usamos useMemo para memorizar la lista filtrada.
  // Solo se recalcula si 'searchTerm' cambia.
  const filteredPeliculas = useMemo(() => {
    if (!searchTerm) {
      return peliculas;
      // Si no hay término, devuelve la lista completa
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return peliculas.filter((pelicula) =>
      // Filtra por el nombre de la película
      pelicula.nombre.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm]);

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Listado de películas</h2>
      <p className="text-gray-700 mb-6">Estas son los películas disponibles:</p>
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Buscar películas por nombre..."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-8">
        {filteredPeliculas.length > 0 ? (
          filteredPeliculas.map((pelicula) => (
            <Link key={pelicula.id} to={`/detalle/pelicula/${pelicula.id}`}>
              <List nombre={pelicula.nombre} foto={pelicula.cartelera}>
                {pelicula.clasificacion}
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
export default Peliculas;

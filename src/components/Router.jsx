import { Routes, Route, Navigate } from "react-router-dom";

import Contenedor from "./Contenedor";
import Detail from "./Detail";

import Home from "../pages/Home";
import Peliculas from "../pages/Peliculas";
import Interpretes from "../pages/Interpretes";
import Admin from "../pages/Admin";
import FomularioPeliculasControlado from "../pages/FomularioPeliculasControlado";
import FomularioPeliculasNoControlado from "../pages/FormularioPeliculasNoControlado";
import FormularioInterpretes from "../pages/FormularioInterpretes";

/**
 * Main application router.
 *
 * Manages all navigation routes using React Router.
 * It defines the main layout through the `Contenedor` component and maps
 * each route to its corresponding page, including list pages, detail views,
 * and fallback routes such as the 404 page.
 *
 * @component
 *
 * @returns {React.ReactElement} The full routing structure of the application.
 *
 * @example
 * <AppRouter />
 *
 * Included routes:
 * - "/" → Home page (`Home`)
 * - "/inicio" → Redirects to "/"
 * - "/peliculas" → Movies list
 * - "/interpretes" → Interpreters list
 * - "/admin" → Admin panel
 * - "/detalle/pelicula/:idPeli" → Movie detail page
 * - "/detalle/pelicula/:idPeli/interprete/:idInterprete" → Interpreter detail page inside a movie
 * - "*" → Custom 404 page
 */
function AppRouter() {
  return (
    <Routes>
      {/* Main layout */}
      <Route element={<Contenedor />}>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Navigate to="/" />} />
        <Route path="/peliculas" element={<Peliculas />} />
        <Route path="/interpretes" element={<Interpretes />} />

        <Route path="/admin" element={<Admin />}>
          <Route path="form-peliculas-controlado" element={<FomularioPeliculasControlado />} />
          <Route path="form-peliculas-no-controlado" element={<FomularioPeliculasNoControlado />} />
          <Route path="form-interpretes" element={<FormularioInterpretes />} />
        </Route>

        <Route
          path="/detalle/pelicula/:idPeli"
          element={<Detail es="pelicula" />}
        />
        <Route
          path="/detalle/pelicula/:idPeli/interprete/:idInterprete"
          element={<Detail es="interprete" />}
        />
      </Route>

      {/* 404 Page */}
      <Route
        path="*"
        element={
          <Contenedor titulo="Page not found">
            <p>The requested route does not exist.</p>
          </Contenedor>
        }
      />
    </Routes>
  );
}

export default AppRouter;

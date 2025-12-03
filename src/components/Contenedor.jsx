import { Outlet } from "react-router-dom";

/**
 * Contenedor component renders the main layout container for the application.
 * It displays a title (if provided) and renders nested route content via <Outlet />.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {string} [props.titulo] - The title to display at the top of the container.
 * @returns {JSX.Element} The rendered container component.
 */

function Contenedor({ titulo }) {
  return (
    <main
      id="main-content"
      role="main"
      tabIndex="-1"
      className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-8"
    >
      <section
        aria-labelledby="main-section-title"
        className="w-full max-w-7xl text-center"
      >
        {titulo && (
          <h1
            id="main-section-title"
            className="font-heading-h1 leading-(--heading-h1-line-height) text-(--colorprimary) [text-shadow:0px_4px_4px_#00000040]"
          >
            {titulo}
          </h1>
        )}

        {/* {children} */}
        {/* Aquí se muestra el contenido según la ruta */}
        <Outlet />
      </section>
    </main>
  );
}

export default Contenedor;
import { useState } from "react";

function FomularioPeliculasControlado() {
  const [form, setForm] = useState({
    nombre: "",
    director: "",
    clasificacion: "",
    recaudacion: "",
    nota: 0,
    cartelera: "",
  });

  const [nameError, setNameError] = useState("");
  const [directorError, setDirectorError] = useState("");
  const [notaError, setNotaError] = useState("");
  const [carteleraError, setCarteleraError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

  setNameError("");
  setDirectorError("");
  setNotaError("");
  setCarteleraError("");

  let hasError = false;

  if (form.nombre.trim().length < 5) {
    setNameError("El nombre debe tener al menos 5 caracteres");
    hasError = true;
  }

  if (form.director.trim().length < 3) {
    setDirectorError("El director debe tener al menos 3 caracteres");
    hasError = true;
  }

  if (Number(form.nota) < 0 || Number(form.nota) > 10) {
    setNotaError("La nota debe estar entre 0 y 10");
    hasError = true;
  }

  if (!form.cartelera.trim().startsWith("http")) {
    setCarteleraError("La URL del póster no es válida");
    hasError = true;
  }

  if (hasError) return;

  // Datos finales normalizados
  const pelicula = {
    nombre: form.nombre.trim(),
    director: form.director.trim(),
    clasificacion: form.clasificacion.trim(),
    recaudacion: form.recaudacion.trim(),
    nota: Number(form.nota),
    cartelera: form.cartelera.trim(),
  };

  console.log("Película enviada:", pelicula);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md"
      >
        <div className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
          Añadir Película
        </div>

        <div className="mb-4">
          <label
            htmlFor="nombre"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nombre de la película:
          </label>
          <input
            name="nombre"
            type="text"
            value={form.nombre}
            onChange={handleChange}
            aria-invalid={!!nameError}
            aria-describedby={nameError ? "error-nombre" : undefined}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          />
        </div>

        <div>
          {nameError && (
            <p
              id="error-nombre"
              className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2"
            >
              {nameError}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="director"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Director de la película:
          </label>
          <input
            name="director"
            type="text"
            value={form.director}
            onChange={handleChange}
            aria-invalid={!!directorError}
            aria-describedby={directorError ? "error-director" : undefined}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="nombre"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Clasificacion de la película:
          </label>
          <input
            name="clasificacion"
            type="text"
            value={form.clasificacion}
            onChange={handleChange}
            aria-invalid={!!notaError}
            aria-describedby={notaError ? "error-nota" : undefined}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="recaudacion"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Recaudacion de la película:
          </label>
          <input
            name="recaudacion"
            type="text"
            value={form.recaudacion}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="nota"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nota de la película:
          </label>
          <input
            name="nota"
            type="text"
            value={form.nota}
            onChange={handleChange}
            aria-invalid={!!notaError}
            aria-describedby={notaError ? "error-nombre" : undefined}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="cartelera"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            URL del poster:
          </label>
          <input
            name="cartelera"
            type="text"
            value={form.cartelera}
            onChange={handleChange}
            aria-invalid={!!carteleraError}
            aria-describedby={carteleraError ? "error-cartelera" : undefined}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default FomularioPeliculasControlado;

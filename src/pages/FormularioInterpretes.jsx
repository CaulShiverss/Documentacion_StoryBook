function FomularioInterpretes() {

    return(
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form
        //onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md"
      >
        <div className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
          Añadir Interprete
        </div>

        <div className="mb-4">
          <label
            htmlFor="nombre"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nombre del Disco:
          </label>
          <input
            id="nombre"
            type="text"
            //value={formData.nombre}
            //onChange={handleChange}
            //aria-invalid={!!nameError}
            //aria-describedby={nameError ? "error-nombre" : undefined}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          />
        </div>

        {/* <div>
          {nameError && (
            <p id="error-nombre" className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">
              {nameError}
            </p>
          )}
        </div> */}
      </form>
    </div>
    );

}

export default FomularioInterpretes;
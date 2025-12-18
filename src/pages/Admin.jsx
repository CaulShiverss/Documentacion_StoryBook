import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Admin() {
  const [activo, setActivo] = useState("controlado");

  const baseBtn = "px-5 py-2 rounded-lg font-medium transition";

  const activoBtn = "bg-blue-500 text-white shadow hover:bg-blue-600";

  const inactivoBtn = "bg-gray-200 text-gray-700 hover:bg-gray-300";

  return (
    <>
      <div className="flex justify-center gap-4">
        <Link to={"/admin/form-peliculas-controlado"}>
          <button
            onClick={() => setActivo("controlado")}
            className={`${baseBtn} ${
              activo === "controlado" ? activoBtn : inactivoBtn
            }`}
          >
            Añadir Película (Controlado)
          </button>
        </Link>

        <Link to={"/admin/form-peliculas-no-controlado"}>
          <button
            onClick={() => setActivo("no-controlado")}
            className={`${baseBtn} ${
              activo === "no-controlado" ? activoBtn : inactivoBtn
            }`}
          >
            Añadir Película (No Controlado)
          </button>
        </Link>

        <button
          onClick={() => setActivo("interprete")}
          className={`${baseBtn} ${
            activo === "interprete" ? activoBtn : inactivoBtn
          }`}
        >
          Añadir Intérprete
        </button>
      </div>
      <Outlet />
    </>
  );
}
export default Admin;

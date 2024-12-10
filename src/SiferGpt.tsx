import { RouterProvider } from "react-router-dom";
import { router } from "./presentation/router/router";

//* funcionalidad inicial de la aplicacion
export const SiferGpt = () => {
  return (
    // Ruta raiz de la app
    <>
      <RouterProvider router={router} />
    </>
  );
};

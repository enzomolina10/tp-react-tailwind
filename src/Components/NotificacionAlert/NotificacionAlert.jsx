import { useEffect } from "react";

const NotificacionAlert = ({ mensaje, tipo = "info", visible, onClose }) => {
  /* console.log("NotificacionAlert props:", { mensaje, tipo, visible });   */

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 950);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  if (!visible) return null;

  let color = "bg-blue-500";
  if (tipo === "exito") color = "bg-green-500 text-green-900";
  if (tipo === "error") color = "bg-red-500 text-red-900";
  if (tipo === "advertencia") color = "bg-yellow-200 text-yellow-900";


  return (
    <div
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-[9999] px-6 py-3 rounded shadow-xl text-white text-center font-semibold transition-all duration-300 ${color}`}
      style={{
        minWidth: "220px",
        maxWidth: "90vw",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
        border: "2px solid white",
      }}
    >
      {mensaje}
    </div>
  );
}

export default NotificacionAlert;

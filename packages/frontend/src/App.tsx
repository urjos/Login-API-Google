import "./index.css";
function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-1">
        ¡Hola, Tailwind con React! 🎉
      </h1>
      <p className="text-gray-700">
        Ya puedes usar clases de Tailwind en tus componentes.
      </p>

      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
        Haz clic aquí
      </button>
    </div>
  );
}

export default App;

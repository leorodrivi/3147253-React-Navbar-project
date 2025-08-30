import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-indigo-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Mi App</div>

          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:underline">Inicio</a>
            <a href="#" className="hover:underline">Servicios</a>
            <a href="#" className="hover:underline">Contacto</a>
          </div>

          <button 
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-indigo-700 rounded-lg p-2">
            <div className="flex flex-col space-y-2">
              <a href="#" className="block py-2 px-4 hover:bg-indigo-500 rounded">Inicio</a>
              <a href="#" className="block py-2 px-4 hover:bg-indigo-500 rounded">Servicios</a>
              <a href="#" className="block py-2 px-4 hover:bg-indigo-500 rounded">Contacto</a>
            </div>
          </div>
        )}
      </nav>

      <main className="container mx-auto p-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-indigo-600 mb-4">Bienvenido a Mi App</h1>
          <p className="text-gray-700">Aquí inicia tu contenido principal.</p>
        </div>
      </main>
    </div>
  );
}

export default App;
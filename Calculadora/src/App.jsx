import { useState } from 'react'
import './App.css'

function App() {
 const [input, setInput] = useState("");

  const numeros = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."];
  const operadores = ["+", "-", "*", "/"];

  const handleClick = (valor) => {
    setInput((prev) => prev + valor);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleResult = () => {
    try {
  
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white shadow-2xl rounded-2xl p-6 w-80">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-700">Calculadora</h1>

      
        <div className="bg-gray-100 rounded-lg p-4 mb-4 text-right text-2xl font-mono text-gray-800 shadow-inner">
          {input || "0"}
        </div>

       
        <div className="grid grid-cols-4 gap-3">
        
          <button
            onClick={handleClear}
            className="col-span-2 bg-red-400 hover:bg-red-500 text-white font-bold py-2 rounded-lg shadow-md transition"
          >
            C
          </button>

          
          <button
            onClick={handleDelete}
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 rounded-lg shadow-md transition"
          >
            ⌫
          </button>

          
          <button
            onClick={() => handleClick("/")}
            className="bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 rounded-lg shadow-md transition"
          >
            ÷
          </button>

      
          {numeros.map((num) => (
            <button
              key={num}
              onClick={() => handleClick(num)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 rounded-lg shadow-md transition"
            >
              {num}
            </button>
          ))}

          
          {operadores.map((op) => (
            <button
              key={op}
              onClick={() => handleClick(op)}
              className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 rounded-lg shadow-md transition"
            >
              {op}
            </button>
          ))}

        
          <button
            onClick={handleResult}
            className="col-span-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-lg shadow-md transition"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App

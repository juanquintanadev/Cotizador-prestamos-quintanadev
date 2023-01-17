import { useState, useEffect } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { formatearDinero, calcularTotalPagar } from "./helpers";

function App() {
  // aca vamos a declarar variables utilizar hooks etc

  // realizamos un destructing del useState, que este mismo retorna un arreglo y extraemos
  // el primer valor es la variable del state y el segundo valor es la funcion que modifica el state que sacamos 
  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);
  const [pago, setPago] = useState(0);

  // siempre lleva un callback como arrow y tambien un arreglo de dependencias, donde lo que colocamos en el arreglo cambia, el useEffect se va a ejecutar
  useEffect(() => {
    const totalPagar = calcularTotalPagar(cantidad, meses);
    setTotal(totalPagar);
  }, [cantidad, meses]);

  // utilizamos otro useEffect para iniciar el pago mensual con un valor correspondiente al total que tenemos y este va a escuchar por los cambios en el total
  useEffect(() => {
    // vamos a calcular el pago
    setPago(total / meses);
  }, [total]);

  // creamos unas variables constantes a las que vamos a usar en el html, que nunca van a cambiar, entonces las declaramos como variables normales
  // las mismas en el return donde va el html van encerradas entre {} para decirle al codigo que es javascript
  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  function handleChange(e) {
    setCantidad(+e.target.value);
  };

  function handleClickDecremento() {
    const valor = cantidad - STEP;
    if(valor < MIN) {
      alert('Cantidad no valida');
      return;
    }
    setCantidad(valor);
  };

  function handleClickIncremento() {
    const valor = cantidad + STEP;
    if(valor > MAX) {
      alert('Cantidad no valida');
      return;
    }
    setCantidad(valor);
  };

  // console.log(cantidad);
  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header/>
      <div className="flex justify-between my-6">
        <Button
          operador= '-'
          fn= {handleClickDecremento}
        />
        <Button
          operador= '+'
          fn= {handleClickIncremento}
        />
      </div>
      <input 
        type="range" 
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
      />
      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">{formatearDinero(cantidad)}</p>
      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Elige un <span className="text-indigo-600">Plazo</span> a pagar
      </h2>
      <select 
        className="mt-5 w-full p-2 bg-white border border-gray-500 rounded-lg text-center font-bold text-gray-500"
        value={meses}
        onChange={e => setMeses(+e.target.value)}
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>
      <div className="text-center my-5 p-5 space-y-3 bg-gray-50">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Resumen <span className="text-indigo-600">de pagos</span>
        </h2>
        <p className="text-center text-xl text-gray-500 font-bold">{meses} Meses</p>
        <p className="text-center text-xl text-gray-500 font-bold">Total a pagar {formatearDinero(total)}</p>
        <p className="text-center text-xl text-gray-500 font-bold">{formatearDinero(pago)} Mensuales</p>
      </div>
    </div>
  );
};

export default App;

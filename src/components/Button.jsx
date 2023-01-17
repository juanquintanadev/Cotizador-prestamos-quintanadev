
// tenemos los props que vamos a ir pasando y este se pasan como objetos al cual podemos aplicar destructing y asi mismo utilizarlas dentro del componente
// inicialmente seria props.operador y props.fn, son los parametros que pasamos al compente desde el html en la app principal
function Button({operador, fn}) {
  return (
    <button
          type="button"
          className="h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-lime-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500"
          onClick={fn}
    >{operador}</button>
  )
};

export default Button;
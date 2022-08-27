import {useState} from "react";

const useSelectMonedas = (label, opciones) => {

  const [state, setState] = useState('')

  const SelectMonedas = () => (
    <>
      <label htmlFor="" className="text-white font-semibold text-xl my-2 block"> {label}</label>
      <select 
        value={state}
        onChange={(e) => setState(e.target.value)}
        className="w-full p-3 rounded-lg text-lg mb-5 text-black">
        <option value="">Seleccione</option>
        {opciones.map( opcion =>(
          <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>
        ) )}
      </select>
    </>
  );

  return [ state, SelectMonedas];
};

export default useSelectMonedas;

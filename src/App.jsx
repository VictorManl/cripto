import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";
import ImagenCripto from "./img/imagen-criptos.png";

function App() {
  const [monedas, setMonedas] = useState({});
  const [cotizacion, setCotizacion] = useState([]);
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const consultarCripto = async () => {
        setCargando(true)
        setCotizacion({})
        const { moneda, cripto } = monedas;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setCotizacion(resultado.DISPLAY[cripto][moneda]);
        setCargando(false)
      };

      consultarCripto();
    }
  }, [monedas]);

  return (
    <div className="max-w-[1300px] mx-auto w-[90%] grid grid-cols-1 gap-4 md:grid-cols-2  ">
      <img
        src={ImagenCripto}
        className="max-w-[400px] w-[80%] mx-auto block mt-10"
        alt="imagen cripto"
      />
      <div>
        <h1 className="text-center font-bold mt-10 mb-12 text-2xl text-white">
          Cotiza criptomonedas al instante
        </h1>
        <Formulario setMonedas={setMonedas} />
        
        { cargando &&  <Spinner/> }
        { cotizacion.PRICE && <Resultado cotizacion={cotizacion}  />  }
        
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import Error from "./Error";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";

const Formulario = ({setMonedas}) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);
  const [animarError, setAnimarError] = useState(false)

  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas);
  const [cripto, SelectCriptomoneda] = useSelectMonedas(
    "Elige tu Criptomoneda",
    criptos
  );

  useEffect(() => {
    const consultarApi = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      const arrayCriptos = resultado.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };
        return objeto;
      });
      setCriptos(arrayCriptos);
    };
    consultarApi();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([moneda, cripto].includes("")) {
      setError(true)
      setTimeout(() =>{
        setAnimarError(true)
        setTimeout(() =>{
          setError(false)
        },300)
      },2000)
      setAnimarError(false)
      return;
    }

    setMonedas({moneda, cripto})
  };

  return (
    <>
      { error && (
        <Error animarError={animarError} > Todos los campos son obligatorios </Error>
      )}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptomoneda />
        <input
          type="submit"
          value="Cotizar"
          className="bg-info text-white w-full p-3 rounded-lg font-bold text-xl uppercase shadow-md shadow-info cursor-pointer hover:bg-info/80 transition-colors"
        />
      </form>
    </>
  );
};

export default Formulario;

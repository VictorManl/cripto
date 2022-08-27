const Resultado = ({ cotizacion }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    cotizacion;

  return (
    <div className="mt-10 mb-10 bg-gray-800 p-4 rounded-lg shadow-lg shadow-gray-800">
      <div className="flex flex-col md:flex-row items-center w-full">
          <img src={`https://cryptocompare.com/${IMAGEURL}`} alt="Logo criptomoneda" className="max-w-[180px] w-[80%] mx-auto block mt-5" />
          <div  className="text-white px-4 w-full">
          <p className="font-bold text-lg mb-2">
            Precio: {''}
            <span className="text-info text-2xl font-black tracking-wide">{PRICE}</span>
          </p>
          <p className="font-semibold text-md mb-2">
            Mas alto del dia: {''}
            <span className="text-info text-lg font-black">{HIGHDAY}</span>
          </p>
          <p className="font-semibold text-md mb-2">
            Mas bajo del dia: {''}
            <span className="text-info text-lg font-black">{LOWDAY}</span>
          </p>
          <p className="font-semibold text-md mb-2">
            Variacion ultimas 24 horas: {''}
            <span className="text-info text-lg font-black">{CHANGEPCT24HOUR}</span>
          </p>
          <p className="font-semibold text-md mb-2">
            Ultima actializacion: {''}
            <span className="text-info text-lg font-black">{LASTUPDATE}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resultado;

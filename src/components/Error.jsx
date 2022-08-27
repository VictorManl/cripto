import React from 'react'

const Error = ({ children, animarError }) => {
  return (
    <div className={`fixed top-7 right-10 bg-slate-600 p-3 rounded-lg animate-Derecha shadow-lg shadow-slate-600 ${ animarError && ( 'animate-eDerecha')}`}>
        <h2 className='uppercase text-info font-extrabold' >Error</h2>
        <span className='font-bold text-white'>
        {children}
        </span>
        </div>
  )
}

export default Error
import React from 'react'

const ListadoPacientes = () => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll' >
        <h2 className='font-black text-3xl text-center'>Listado pacientes</h2>
        <p className='text-xl mt-5 mb-10 text-center'>
            Administra tus {''}
            <span className='text-indigo-600 font-bold'>Pacientes y citas</span>
        </p>

        <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl '>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre : {''}
                <span className='font-normal normal-case' >Hook</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario : {''}
                <span className='font-normal normal-case' >Raul</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Email : {''}
                <span className='font-normal normal-case' >correo@correo.com</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha de alta : {''}
                <span className='font-normal normal-case' > 5 Diciembre de 2022</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas : {''}
                <span className='font-normal normal-case' >no queria comer </span>
            </p>
        </div>

    </div>
  )
}

export default ListadoPacientes
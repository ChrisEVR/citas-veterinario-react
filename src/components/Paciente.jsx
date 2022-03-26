import React from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {id, nombre, propietario, email, telefono, fechaAlta, sintomas} = paciente;

    const handleEliminar = () => {
        const respuesta = confirm("¿Desea eliminar a este paciente?")

        if(respuesta){
            eliminarPaciente(id)
        }
    }

  return (
    <div className='mx-5 my-4 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Nombre: {""} <span className='font-normal normal-case'>{nombre}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Propietario: {""} <span className='font-normal normal-case'>{propietario}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Correo electrónico: {""} <span className='font-normal normal-case'>{email}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Teléfono: {""} <span className='font-normal normal-case'>{telefono}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Fecha de Alta: {""} <span className='font-normal normal-case'>{fechaAlta}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>
                Síntomas: {""} <span className='font-normal normal-case'>{sintomas}</span>
            </p>

            <div className='flex justify-between'>
                <button 
                    type='button' 
                    className='bg-green-600 hover:bg-green-700 px-8 py-2 rounded-lg text-white font-bold uppercase'
                    onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>
                <button 
                    type='button' 
                    className='bg-red-600 hover:bg-red-700 px-8 py-2 rounded-lg text-white font-bold uppercase'
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>

        </div>
  )
}

export default Paciente
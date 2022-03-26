import { useState, useEffect } from "react"
import Error from "./Error"

const Formulario = ({pacientes, paciente, setPacientes, setPaciente}) => {

  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [fechaAlta, setFechaAlta] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(paciente).length > 0){

        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setTelefono(paciente.telefono)
        setFechaAlta(paciente.fechaAlta)
        setSintomas(paciente.sintomas)

        console.log(paciente)
    }
  }, [paciente])
  
  const generarId = () => {
      const random = Math.random().toString(36).substring(2)
      const fecha = Date.now().toString(36)

      return random + fecha
  }

  const handleSubmit = e => {
    e.preventDefault()
      
    if([nombre, propietario, email, telefono, fechaAlta, sintomas].includes("")){
        setError(true)
        return
    }


    setError(false)

    const objetoPaciente = {
        nombre,
        propietario,
        email,
        telefono,
        fechaAlta,
        sintomas
    }

    if (paciente.id) {
        //Editando el registro
        objetoPaciente.id = paciente.id

        const pacientesActualizados = pacientes.map(pacienteState => 
            pacienteState.id === objetoPaciente.id ? objetoPaciente : pacienteState
        )

        setPacientes(pacientesActualizados)
        setPaciente({})
    } else {
        
        //Nuevo registro
        objetoPaciente.id = generarId()
        setPacientes([...pacientes, objetoPaciente])
    }



    setNombre("")
    setPropietario("")
    setEmail("")
    setTelefono("")
    setFechaAlta("")
    setSintomas("")

  }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
        <h2 className='font-black text-3xl text-center'>
            Seguimiento Pacientes</h2>

        <p className='text-lg mt-5 text-center'>
            Añade Pacientes y {''}
            <span className='text-green-600 font-bold'>Admínistralos</span>
        </p>

        <form 
            onSubmit={handleSubmit}
            className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
        >
            <div className='mt-5'>
                <label className='block text-gray-700 uppercase font-bold' htmlFor="mascota">
                    Nombre de la mascota
                </label>

                <input
                    id='mascota'
                    type="text"
                    placeholder='Nombre de la mascota'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    onChange={e => setNombre(e.target.value)}
                    value={nombre}
                />
            </div>

            <div className='mt-5'>
                <label className='block text-gray-700 uppercase font-bold' htmlFor="propietario">
                    Nombre del propietario
                </label>

                <input
                    id='propietario'
                    type="text"
                    placeholder='Nombre del propietario'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    onChange={e => setPropietario(e.target.value)}
                    value={propietario}
                />
            </div>

            <div className='mt-5'>
                <label className='block text-gray-700 uppercase font-bold' htmlFor="email">
                    Correo electrónico
                </label>

                <input
                    id='email'
                    type="email"
                    placeholder='Correo electrónico para contacto'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
            </div>

            <div className='mt-5'>
                <label className='block text-gray-700 uppercase font-bold' htmlFor="telefono">
                    Teléfono de contacto
                </label>

                <input
                    id='telefono'
                    type="tel"
                    placeholder='Teléfono para contacto'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    onChange={e => setTelefono(e.target.value)}
                    value={telefono}
                />
            </div>

            <div className='mt-5'>
                <label className='block text-gray-700 uppercase font-bold' htmlFor="alta">
                    Alta
                </label>

                <input
                    id='alta'
                    type="date"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    onChange={e => setFechaAlta(e.target.value)}
                    value={fechaAlta}
                />
            </div>

            <div className='mt-5'>
                <label className='block text-gray-700 uppercase font-bold' htmlFor="sintomas">
                    Síntomas
                </label>

                <textarea
                    id='sintomas'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    placeholder='Describe los síntomas'
                    onChange={e => setSintomas(e.target.value)}
                    value={sintomas}
                />
            </div>

            <input 
                type="submit" 
                className='bg-green-600 mt-5 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-green-700 transition-colors rounded-md'
                value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
            />
            {
                error && 
                <Error
                    mensaje={'Todos los campos son obligatorios'}
                />
            }
        </form>

    </div>
  )
}

export default Formulario
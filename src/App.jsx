import React from 'react'
import { nanoid } from 'nanoid'

const App = () => {
  const [tarea, setTarea] = React.useState('');
  const [tareas, setTareas] = React.useState([]);
  const agregarTarea = e => {
    e.preventDefault()

    if (!tarea.trim()) {
      console.log('elemento vacio');
      return
    }
    console.log(tarea);
    setTareas([...tareas, { id: nanoid(), NombreTarea: tarea }])
    setTarea('')
  }
  return (
    <div className='container mt-5'>
      <h1 className='text-center'>crud simple</h1>
      <h1>
        <div className="row">
          <div className="col-8">
            <h4 className="text-center">Lista de tareas</h4>
            <ul className="list-group">
              {
                tareas.map(item => (
                  <li className="list-group-item" key={item.id}>
                    <span className="lead float-start">{item.NombreTarea}</span>
                    <button className="btn btn-danger btn-sm float-end mt-2 mx-2">Eliminar</button>
                    <button className="btn btn-warning btn-sm float-end mt-2">Editar</button>
                  </li>
                ))
              }



            </ul>
          </div>
          <div className="col-4">
            <h4 className="text-center">Formulario</h4>
            <form onSubmit={agregarTarea}>
              <input
                type="text"
                className="form-control mb-2"
                placeholder='Ingrese tarea'
                onChange={e => setTarea(e.target.value)}
                value={tarea}
              />
              <div className="d-grid gap-2">
                <button
                  className="btn btn-dark btn-block"
                  type='submit'
                >Agregar</button>
              </div>

            </form>
          </div>
        </div>
      </h1>
    </div>
  )
}

export default App

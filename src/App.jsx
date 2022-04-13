import React from 'react'
import { nanoid } from 'nanoid'

const App = () => {
  const [tarea, setTarea] = React.useState('');
  const [tareas, setTareas] = React.useState([]);
  const [modoEdicion, setModoEdicion] = React.useState(false);
  const [id, setId] = React.useState('');
  const [error, setError] = React.useState(null);


  const eliminarTarea = id => {
    const arrayFiltrado = tareas.filter(item => item.id !== id)
    setTareas(arrayFiltrado)

  }


  const agregarTarea = e => {
    e.preventDefault()

    if (!tarea.trim()) {
      console.log('elemento vacio');
      setError('Escriba algo porfavor..')
      return
    }
    setTareas([...tareas, { id: nanoid(), NombreTarea: tarea }])
    setTarea('')
    setError(null)
  }

  const editar = item => {
    setModoEdicion(true)
    setTarea(item.NombreTarea)
    setId(item.id)

  }

  const editarTarea = e => {
    e.preventDefault();
    if (!tarea.trim()) {
      console.log('elemento vacio');
      setError('Escriba algo porfavor..')
      return
    }
    const arrayEditado = tareas.map(
      item => item.id === id ? { id, NombreTarea: tarea } : item
    )
    setTareas(arrayEditado)
    setModoEdicion(false)
    setTarea('')
    setId('')
    setError(null)

  }
  return (
    <div className='container mt-5'>
      <h1 className='text-center'>Pendientes</h1>
      <hr />
      <br />
      <br />
      <br />
      <h1>
        <div className="row">
          <div className="col-8">
            <h4 className="text-center">Lista de tareas</h4>
            <ul className="list-group">
              {
                tareas.length === 0 ? (
                  // <li className="list-group item">No hay pendientes</li>
                  <div className="alert alert-danger" role="alert">
                    No hay tareas
                  </div>
                ) : (
                  tareas.map(item => (
                    <li className="list-group-item" key={item.id}>
                      <span className="lead float-start">{item.NombreTarea}</span>
                      <button
                        className="btn btn-danger btn-sm float-end mt-2 mx-2"
                        onClick={() => eliminarTarea(item.id)}
                      >Eliminar</button>

                      <button
                        className="btn btn-dark btn-sm float-end mt-2"
                        onClick={() => editar(item)}
                      >Editar</button>
                    </li>
                  ))
                )
              }



            </ul>
          </div>
          <div className="col-4">
            <h4 className="text-center">
              {
                modoEdicion ? 'Editar' : 'Agregar'
              }
            </h4>
            <form onSubmit={modoEdicion ? editarTarea : agregarTarea}>

              {
                error ? <span className="text-danger">{error}</span>
                  : null

              }

              <input
                type="text"
                className="form-control mb-2"
                placeholder='Ingrese tarea'
                onChange={e => setTarea(e.target.value)}
                value={tarea}
              />
              <div className="d-grid gap-2">
                {
                  modoEdicion ? (
                    <button
                      className="btn btn-warning btn-block"
                      type='submit'
                    >hecho</button>
                  ) : <button
                    className="btn btn-success btn-block"
                    type='submit'
                  >Agregar</button>
                }

              </div>

            </form>
          </div>
        </div>
      </h1>
    </div>
  )
}

export default App

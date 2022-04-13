import React from 'react'
import { nanoid } from 'nanoid'

const App = () => {
  const [tarea, setTarea] = React.useState('');
  const [tareas, setTareas] = React.useState([]);
  const [modoEdicion, setModoEdicion] = React.useState(false);
  const [id, setId] = React.useState('');



  const eliminarTarea = id => {
    const arrayFiltrado = tareas.filter(item => item.id !== id)
    setTareas(arrayFiltrado)

  }


  const agregarTarea = e => {
    e.preventDefault()

    if (!tarea.trim()) {
      console.log('elemento vacio');
      return
    }
    setTareas([...tareas, { id: nanoid(), NombreTarea: tarea }])
    setTarea('')
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
      return
    }
    const arrayEditado = tareas.map(
      item => item.id === id ? { id, NombreTarea: tarea } : item
      )
      setTareas(arrayEditado)
      setModoEdicion(false)
      setTarea('')
      setId('')

  }
  return (
    <div className='container mt-5'>
      <h1 className='text-center'>Pendientes</h1>
      <br />
      <br />
      <br />
      <h1>
        <div className="row">
          <div className="col-8">
            <h4 className="text-center">Lista de tareas</h4>
            <ul className="list-group">
              {
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

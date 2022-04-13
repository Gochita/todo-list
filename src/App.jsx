import React from 'react'

const App = () => {
  return (
    <div className='container mt-5'>
      <h1 className='text-center'>crud simple</h1>
      <h1>
        <div className="row">
          <div className="col-8">
           <h4 className="text-center">Lista de tareas</h4>
           <ul className="list-group">
             <li className="list-group-item">
               <span className="lead float-start">Nombre tarea</span>

               <button className="btn btn-danger btn-sm float-end mt-2 mx-2">Eliminar</button>
               <button className="btn btn-warning btn-sm float-end mt-2">Editar</button>
             </li>
           </ul>
          </div>
          <div className="col-4">
           <h4 className="text-center">Formulario</h4>
          </div>
        </div>
      </h1>
    </div>
  )
}

export default App

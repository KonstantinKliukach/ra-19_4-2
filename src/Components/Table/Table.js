import React from 'react'

import './Table.css'

const Table = ({trainings, deleteItem, editItem}) => {
 return (
  <table className="table col-md-8">
   <thead className='thead-light'>
    <tr>
     <th scope="col">Дата</th>
     <th scope="col">Пройдено км</th>
     <th scope="col">Действия</th>
    </tr>
   </thead>
   <tbody>
      {trainings.map((training, index) => {
        return (
          <tr key={index}>
            <td>{training.date}</td>
            <td>{training.distance}</td>
            <td>
              <button type="button" className="btn btn-outline-success btn-sm action-button" onClick={()=>editItem(index)}>
                <i className="fa fa-pencil" />
              </button>
              <button type="button" className="btn btn-outline-danger btn-sm action-button" onClick={()=>deleteItem(index)}>
                <i className="fa fa-trash-o" />
              </button>
            </td>
          </tr>
        )
      })}
   </tbody>
  </table>
 )
}

export default Table
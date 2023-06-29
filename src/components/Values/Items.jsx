import React from 'react'
import ListItem from './ListItem'

function Items(props) {

  return (
    <div className='item'>
       <h1>{props.heading}</h1>
       <ul>
            {props.Listarr.map(item=>{
                return <ListItem key={props.id} Name={item.Name} onDelete={props.OnDelete} Price={item.Price} id={item.Id} />
            })}
       </ul>
    </div>
  )
}

export default Items
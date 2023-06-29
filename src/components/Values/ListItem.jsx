import React from 'react'

function ListItem(props) {

    function deleteItem(e)
    {
        props.onDelete(e.target.id);
    }
     
  return (
    <>
        <li>{props.Price}-{props.Name}-<button id={props.id} onClick={deleteItem}>Delete</button></li>
    </>
  )
}

export default ListItem
import React from 'react'
import Items from './Items'

function Values(props) {
  return (
    <>
        <Items OnDelete={props.OnDelete} Listarr={props.List} heading="Food"  />
    </>
  )
}

export default Values
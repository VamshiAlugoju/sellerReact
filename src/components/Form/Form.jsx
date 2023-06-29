
import React from 'react'

function Form(props) {

    const [name,setname] = React.useState("");
    const [price,setprice] = React.useState(0);

    function handleChange(e)
    {    
         let value = e.target;

         if(value.name ==="name")
         {
            setname(value.value)
         }
         else if(value.name === "price")
         {
            setprice(value.value)
         }
    }

   
    function AddProduct(e)
    {
        e.preventDefault();
        console.log(name,price)
        const random = Math.floor(Math.random()*1000000).toString();
        const obj = {
            Name:name,Price:price,Id:random
        }
        props.Adddata(obj);
    }

  return (
    <>   
        <label htmlFor="">Price :</label>
        <input value={price} name="price" onChange={handleChange} type="number" />
        <label htmlFor="">Name :</label>
        <input  value={name} name="name" onChange={handleChange} type="text" />
        <button onClick={AddProduct}>Add</button>
    </>
  )
}

export default Form
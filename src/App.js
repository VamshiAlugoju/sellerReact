// import { type } from 'os';
import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import Values from './components/Values/Values';

function App() {

  const [data,setdata] = React.useState([]);
  function Adddata(obj)
  {
     setdata(prev=>{
      return [...prev,obj]
     });
  }

  function DeleteData(id)
  {  
     setdata(prev=>{
      return prev.filter(item=>{
        return item.Id !== id
      })
     })
  }

  return (
    <div className="App">
      <Form Adddata={Adddata} />
      <Values OnDelete={DeleteData} List={data} />
    </div>
  );
}

export default App;

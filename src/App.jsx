import logo from './logo.svg';
import './App.css';
import Test from './Test/Test';
import { useState } from 'react';

function App() {
  const [name, setname] = useState("BMW Pencil from use state");
  const [Brand, setBrand] = useState("iphon");
  const [Id, setId] = useState(0);
/*   const change = () =>{
    setdisplay(!display)
  } */
  const TitleHundle = (event) =>{
    setname(event.target.value)
  }
  const BrandHundle = (event) =>{
    setBrand(event.target.value)
  }
  const IdHundle = (event) =>{
    setId(event.target.value)
  }
  const PutAPI = () =>{
    fetch(`https://dummyjson.com/products/${Id}`, {
      method: 'PUT', /* or PATCH */
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: name,
        brand: Brand,
      })
    })
    .then(res => res.json())
    .then(res => console.log(res));
  }

  const GetAPI = () =>{
    fetch(`https://dummyjson.com/products/${Id}`)
    .then(res => res.json())
    .then(res => {
      setname(res.title)
      setBrand(res.brand)
    });
  }
  return (
          <>
          <input type="text" placeholder='the id for product' onChange={IdHundle} />
          <button onClick={GetAPI}> ready </button>
          <input type="text" onChange={TitleHundle} placeholder='title' value={name} />
          <input type="text" onChange={BrandHundle} placeholder='brand' value={Brand} />
          <button onClick={PutAPI}>click</button>
          </>
  );
}

export default App;

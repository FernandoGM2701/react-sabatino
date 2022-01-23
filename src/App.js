import { useState } from 'react';
import './App.css';

function App() {

  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [equipo, setEquipo] = useState("municipal");

  const onChangeLinea1 = (evento) => {
    return setLinea1(evento.target.value)
  }

  const onChangeLinea2 = (evento) => {
    return setLinea2(evento.target.value)
  }
  
  const onChangeImage = (evento) => {
    return setEquipo(evento.target.value)
  }

  return (
    <div className='App'>
     <h1>Seleccione el equipo de fútbol peruano de su preferencia:</h1> 
     <select onChange = {onChangeImage} >
       <option value="municipal">Deportivo Municipal</option>
       <option value="universitario">Universitario</option>
       <option value="alianza">Alianza Lima</option>
       <option value="boys">Sport Boys</option>
       <option value="cristal">Sporting cristal</option>
     </select>
     <br/>
     <input onChange={onChangeLinea1} type="text" placeholder='Linea 1'/> <br/>
     <input onChange={onChangeLinea2} type="text" placeholder='Linea 2'/> <br/>
     <button>Exportar</button>

     <div className='estilosMeme'>
       <span> {linea1} </span> <br/>
       <span> {linea2} </span>
       <img src= {"img/" + equipo + ".png"} ></img>
     </div>
      

    </div>
  );
}

export default App;

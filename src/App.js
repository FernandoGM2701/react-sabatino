import { useState } from 'react';
import './App.css';
import html2canvas  from 'html2canvas';

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

  const onClickExportarImage = (evento) => {
    html2canvas(document.querySelector("#equipoFutbol")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement("a");
      link.download = "equipo.png";
      link.href = img;
      link.click();
    });
    return alert("Se descargó la imagen correctamente")
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
     <button onClick={onClickExportarImage} >Exportar</button>

     <div className='estilosMeme' id='equipoFutbol'>
       <span> {linea1} </span> <br/>
       <span> {linea2} </span>
       <img src= {"img/" + equipo + ".png"} ></img>
     </div>
      

    </div>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import BarraLateral from "./Components/BarraLateral/BarraLateral";
import { albumsApi } from './Components/Api/AlbumApi';
import EspacioCanciones from "./Components/EspacioCanciones/EspacioCanciones";


function App() {


  // albumsApi.get(`search?q=madonna`)  
  //   .then(resp => {
  //     resp.data.data.map(buscador => console.log(buscador.title))
  //   })

  return (
    <div>
      <div className="row w-100 justify-content-end">
        <div className="barraLA col-1 col-sm-1 col-lg-3 fixed-top">    
          <button className="menu btn ">
            <i class="bi bi-list"></i>
          </button>      
          <BarraLateral></BarraLateral>    
        </div>
        <div className="col-9">
          <EspacioCanciones></EspacioCanciones>  
        </div>        
      </div>
    </div>
  );
}

export default App;

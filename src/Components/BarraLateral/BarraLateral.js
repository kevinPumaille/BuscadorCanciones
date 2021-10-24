import Logo from "../Foxbel-Music/foxbel-music.png";
import "./barraLateral.css";
import Barranavegador from './BarraNavegador';


function BarraLateral(){

    const bLateral = [
        {
            titulo:'Mi Librería',
            opciones:[
                'Recientes',
                'Artistas',
                'Álbums',
                'Canciones',
                'Estaciónes'
            ]
        },
        {
            titulo:'Playlist',
            opciones:[
                'Metal',
                'Para bailar',
                'Rock 90s',
                'Baladas'
            ]
        },    
    ]

    return (
        <div className="barraLat  pt-3">
            
            <div className="logo col-md-9 col-lg-9 my-4">
                <img className="img-fluid" src={Logo} alt="Logo"/>
            </div>

            {
                bLateral.map((opc,index) =>
                    <Barranavegador
                        key={index}
                        titulo={opc.titulo}
                        opciones={opc.opciones}
                    >
                    </Barranavegador>
                )
            }        
                  
        </div>
    );
}

export default BarraLateral;
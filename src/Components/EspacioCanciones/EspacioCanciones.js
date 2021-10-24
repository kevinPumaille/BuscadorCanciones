import './espacioCanciones.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { albumsApi } from '../Api/AlbumApi';


function EspacioCanciones(){             

    const[albunes,setAlbunes] = useState([]);
    const[recorrerAlb,setrecorrerAlb] = useState([]);
    const[busqueda,setBusqueda] = useState("");

    const peticionMusica = async(search='adele')=>{
        await albumsApi.get(`search?q=${search}`)  
            .then(resp => {
                // resp.data.data.map(buscador => console.log(buscador))
                setAlbunes(resp.data.data)
                setrecorrerAlb(resp.data.data)
                console.log(busqueda)
            }).catch(error=>{
                console.log(error)
            })
    }
    
    // const peticionGet = async()=>{
    //     await axios.get('https://peliculasapi.herokuapp.com/serviceREST/PeliculasKevin/ListaPeliculas')
    //         .then(rpt =>{
    //             setAlbunes(rpt.data)
    //             setrecorrerAlb(rpt.data)
    //         }).catch(error=>{
    //             console.log(error)
    //         })
    // }     
    
    const handleChange = e =>{        
        setBusqueda(e.target.value)        
        filtrar(e.target.value)        
    }

    const filtrar = (abuscar) =>{
        var resultadoBusqueda = recorrerAlb.filter((elemento) =>{
            if(elemento.album.title.toString().toLowerCase().includes(abuscar.toLowerCase())
                || elemento.artist.name.toString().toLowerCase().includes(abuscar.toLowerCase())){
                return elemento;
            }
        });
        setAlbunes(resultadoBusqueda)
    }

    useEffect(()=>{
        // peticionGet();   
        peticionMusica();        
    },[])

    return (
        <div className="EspacioCan container ">
            <div className='row justify-content-between mb-4 '>
                <div className='buscador col-lg-6 col-md-11'>
                    <input id='buscadorEnter' className=' col-11 ' type='text' value={busqueda} onChange={handleChange} placeholder='Buscar'/>
                    <i class="bi bi-search"></i>
                </div> 
                <div className='nombreUs col-lg-3 col-md-12'>
                    <i class=" bi bi-person"></i>
                    <p className='d-inline-block'>Francisco M.</p>
                </div>                 
            </div>     

            <div className='row  p-3 '>
                <div className='imagPort col-6 col-md-6 col-lg-3 '>
                    <img className='img-fluid' src={'https://e-cdns-images.dzcdn.net/images/cover/1a5f34fb1ce5ebad0557c06d90edba5c/250x250-000000-80-0-0.jpg'} alt='imagen'/>                    
                </div>

                <div className='infoPort col-lg-9 col-md-12 py-3'>
                    <div className=' px-3 pt-3'>                        
                        <p className='titulo'>Adele 21 <br/><span className='loMejor'>Lo mejor de Adele</span> <span className='seguidores'>2767 seguidores</span></p>
                        <p className='descripcion'>Adele Laurie Blue Adkins (Tottenham,Londres,Inglaterra,5 de mayo de 1988), conocida simplemente como Adele, es una cantante, compositora y multinstrumental britanica.</p>
                    </div>                    
                    <div className='botonesPorAlb'>
                        <button className='btnReproducir col-12 col-md-3 col-lg-2 btn px-4 my-1'>Reproducir</button>
                        <button className='btnSeguir btn col-12 col-md-3 col-lg-2 px-5 my-1'>Seguir</button>
                        <i class="col-12 col-md-3 col-lg-2 btn bi bi-three-dots"></i>
                    </div>                                        
                </div>

            </div>   

            <div className='row  mt-5'>
                <h3 className='resultados'>Resultados</h3>   
            </div>

            <div className='row'>
                <div className='container  pt-3'>
                    <div className='row '>
                        {
                            albunes && albunes.map(dat =>
                                <div className='album col-2' key={dat.id}>
                                    <div className='imgAlbum'>
                                        <img src={dat.album.cover_medium} className='img-fluid' alt='imagen'/>
                                    </div>
                                    <p>{dat.album.title}<br/><span>{dat.artist.name}</span></p>
                                </div>
                            )
                        }                           
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default EspacioCanciones;
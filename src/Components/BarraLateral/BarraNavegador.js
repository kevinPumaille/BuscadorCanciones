import Barraopciones from "./BarraOpciones";

function Barranavegador(props){
    
    const listaOpciones = props.opciones;
    
    return (        
        <div className="pt-3">
            <h3 className="text-light">{props.titulo}</h3>
            {
                listaOpciones.map((op,index) =>
                    <Barraopciones
                        key={index}
                        opcio = {op}
                    >                        
                    </Barraopciones>    
                )
            }            
        </div>
    );
}

export default Barranavegador;
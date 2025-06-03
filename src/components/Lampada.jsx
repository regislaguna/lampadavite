import { useState } from "react";
import lampadaAcesa from "../assets/lampadaAcesa.png";
import lampadaApagada from "../assets/lampadaApagada.png";
import lampadaQuebrada from "../assets/lampadaQuebrada.png";
import "./Lampada.css";

function Lampada({msg}) {
    const [estaAcesa, setEstaAcesa] = useState(false);
    const [contadorClicks, setContadorClicks] = useState(0);
    const [estaQuebrada, setEstaQuebrada] = useState(false);

    const alterarLampada = () => {
        if(estaQuebrada) return; // Se já está quebrada, não faz nada

        setContadorClicks(contadorClicks + 1);
        
        if(contadorClicks >= 11) {
            setEstaQuebrada(true);
        }else {
            setEstaAcesa(!estaAcesa);
        }
    };

    const resetarLampada = () => {
        setEstaAcesa(false);
        setContadorClicks(0);
        setEstaQuebrada(false);
    };

    // Derterminar qual imagem está na tela
    let imagemLampada;
    if(estaQuebrada) {
        imagemLampada = lampadaQuebrada;
    }else {
        imagemLampada = estaAcesa ? lampadaAcesa : lampadaApagada;
    }
    return (
        <>
            <div>
                <h2>Lampada Interativa</h2>
                <p>Cliques: {contadorClicks}</p>
                <img src={imagemLampada} alt="Lâmpada" onClick={alterarLampada} />
                
                {
                    estaQuebrada && (<a href="#" onClick={resetarLampada}>Resetar</a>)
                }
            </div>
        </>
    );
}

export default Lampada;
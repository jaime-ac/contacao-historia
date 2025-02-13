import { useState } from 'react';
import './Body.css'

function Body() {
    
    const [imagem, setImagem] = useState('./images/inicio.png');

    const [imagens, setImagens] = useState([
        './images/casa-abandonada.png',
        './images/tristeza.png', 
        './images/discussão.png', 
        './images/casamento.png', 
        './images/obstaculo.png',  
        './images/trabalho.png', 
        './images/greve.png', 
        './images/dificuldade.png',
        './images/aposta.png',
        './images/aviao.png',
        './images/parto.png',
        './images/viagem.png',
        './images/hospital.png',
        './images/bar.png',
        './images/funeral.png'
    ]);

    function rolarDado(){

            if (imagens.length === 0) {

                setImagem('./public/images/fim.png')

            }else{

                let i = Math.floor(Math.random() * imagens.length);
        
                setImagem(imagens[i]);
    
                setImagens([...imagens.filter((img) => img != imagens[i])])
        
                // console.log(i)
                // console.log(imagens)

            }
        
    }

  return (
    <div className='container-body'>

        <div className="body_top">

            <img src="./images/ilustracao.png" alt="" className='ilustration_image'/>

            <label className="description_text">A imagem decide o rumo, mas só você conta a história...</label>
            
        </div>
        
        <div className="body_bottom">

            <div className='quantidade-imagens'>

                <div className="container-quantidade__imagens">

                    <label htmlFor="" className="quantidade-imagens__text">Imagens restantes: {imagens.length}</label>

                </div>

            </div>

            <div className="card_sort">

                <img src={imagem} alt="" className='image_result'/>

            </div>

            <div className="button_sort">

                <button className="button_sort--modification" onClick={rolarDado}>Sortear</button>

            </div>

        </div>
      
    </div>
  )
}

export default Body

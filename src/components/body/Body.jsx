import { useState } from 'react';
// import './Body.css'
//toda estilização da página está no arquivo index.css, é uma outra forma de estilizar os elementos da minha página, a parte boa é que não preciso importar o arquivo aqui;

function Body() {
    
    const [imagem, setImagem] = useState('./images/inicio.png');

    // meu array de imagens, foi criado com o useState para facilitar o processo de rendirização;
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

    // função do botão para gerar uma imagem aleatória do meu array e mostrar ao usuário;
    function rolarDado(){

            if (imagens.length === 0) { //verifica se o array das imagens está vázio, para mostrar a imagem que indica o final da história;

                setImagem('./images/fim.png')

            }else{ //caso contrário...

                // gera uma um indice aleatório do meu array e guarda na variável {i};
                let i = Math.floor(Math.random() * imagens.length);
        
                // direciona a imagem que está armazenada no indice [i] do meu array imagens[i] para o quadro de imagens sorteadas, passando ela para o state {imagem};
                setImagem(imagens[i]); 

                // aqui o comando desestrutura meu array, criando uma nova com apenas imagens que ainda não foram sorteadas, excluíndo dessa forma a imagem que já foi sorteada;
                setImagens([...imagens.filter((img) => img != imagens[i])])

            }
        
    }

  return (
    
    <div className='container-body'>

        <div className="body_top">

            <label className="description_text">A imagem decide o rumo...</label>
            <img src="./images/ilustracao.png" alt="" className='ilustration_image'/>
            <label className="description_text">...mas só você conta a história!</label>
            
        </div>
        
        <div className="body_bottom">

            <div className='quantidade-imagens'>

                <div className="container-quantidade__imagens">

                    {/* mostra a quantidade de imagens restantes; */}
                    <label htmlFor="" className="quantidade-imagens__text">Imagens restantes: {imagens.length}</label> 

                </div>

            </div>

            <div className="card_sort">

                {/* mostra a imagem sorteada a medida que o usuário vai clicando o botão de sortear; */}
                <img src={imagem} alt="" className='image_result'/> 

            </div>

            <div className="button_sort">

                {/* botão com função para sortear as imagens; */}
                <button className="button_sort--modification" onClick={rolarDado}>Sortear</button> 

            </div>

        </div>
      
    </div>
  )
}

export default Body

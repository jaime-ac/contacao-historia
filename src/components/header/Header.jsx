// import './Header.css'
//toda estilização da página está no arquivo index.css, é uma outra forma de estilizar os elementos da minha página, a parte boa é que não preciso importar o arquivo aqui;

function Header() {
  return (
    <div className='container-header'>

      <div className="header_card">

        <label htmlFor="" className='header_title--modification'>Fábulas em Imagens</label>
        <label htmlFor="" className='header_subtitle--modification'> ⏩deixe o quadrado guiar sua imaginação⏪</label>
        
      </div>

      
    </div>
  )
}

export default Header

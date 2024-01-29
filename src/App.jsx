import React from 'react'
import './App.css';

const BTN = (props = { url, title, description, icon, message }) => {
  return (
    <a href={props.url} target='_blank' className='btn-custom'>
      <div>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
      <img src={props.icon} alt="Icon" />
    </a>
  )
}

const App = () => {
  return (
    <div className='container'>
      <div className='header'>
        <p className='banner'>E aí, bora conversar?</p>
        <img src="./assets/imgs/img.png" alt="Minha foto de perfil" />
        <div>
          <h2>Lucas Ribeiro</h2>
          <p>Designer UI/UX & Developer</p>
        </div>
      </div>

      <div className='principal'>
        <h4>Principal</h4>
        {/* Criar um component BTN */}
        <BTN url="https://api.whatsapp.com/send?phone=5519998585369&text=E%20a%C3%AD%20Lucas,%20gostaria%20de%20saber%20mais%20sobre%20seu%20servi%C3%A7o!" title="Orçamentos" description="Me chame e fature mais com seus négocios online" icon="./assets/imgs/svgs/whatsapp.svg" />
        <BTN url="https://www.instagram.com/luckadesign" title="Instagram" description="Conteúdo sobre web design e figma" icon="./assets/imgs/svgs/instagram.svg" />
        <BTN url="https://www.behance.net/luckadesign" title="Portfólio" description="Veja meus melhores projetos no Behance!" icon="./assets/imgs/svgs/behance.svg" />
        <BTN url="https://luckadesign.netlify.app/" title="Website" description="Meu site com um pouco de tudo :)" icon="./assets/imgs/svgs/site-icon.svg" />
      </div>

      <div className='outros'>
        <h4>Outros</h4>
        {/* Criar um component BTN */}
        <BTN url="https://www.instagram.com/luckadesign" title="Livros" description="Livros que eu recomendo ler!" icon="./assets/imgs/svgs/book.svg" />
        <BTN url="https://www.instagram.com/luckadesign" title="Templates" description="Use meus templates para criação de design de landing page" icon="./assets/imgs/svgs/lump.svg" />
      </div>

    </div>
  )
}

export default App;
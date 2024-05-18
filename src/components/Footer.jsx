import { FaFacebookSquare } from "react-icons/fa"; 
import { GrInstagram } from "react-icons/gr"; 
import { GrYoutube } from "react-icons/gr"; 
import React from 'react'

const Footer = () => {
  return (
    <div className='footerGrid'>
      <div className='footerItems invisible md:visible -mt-60 md:mt-0'>
        <h1 className=' footerTitle'>Encontre Uma Loja Nike</h1>
        <a>Cadastre-se para receber novidades</a>
        <a>Cartão Presente</a>
        <a>Mapa do Site</a>
        <a>Nike Journal</a>
      </div>
      <div className='footerItems items-center -mt-10 md:mt-0'>
        <h1 className='footerTitle'>Ajuda</h1>
        <a>Dúvidas Gerais</a>
        <a>Trocas e Devoluções</a>
        <a>Pagamentos</a>
        <a>Produtos</a>
        <a>Corporativo</a>
        <a>Fale Conosco</a>
      </div>
      <div className='footerItems items-center'>
        <h1 className='footerTitle'>Sobre a NIKE</h1>
        <a>Propósito</a>
        <a>Sustentabilidade</a>
        <a>Sobre a Nike, Inc.</a>
        <a>Sobre o Grupo SBF</a>
      </div>
      <div className="footerItems">
        <h1 className="footerTitle">Redes Sociais</h1>
        <div className="flex text-lg items-center">
            <a className="socialIcons text-3xl">
                <GrYoutube />
            </a>
            <a className="socialIcons">
                <GrInstagram />
            </a>
            <a className="socialIcons">
               <FaFacebookSquare /> 
            </a>
        </div>
      </div>
    </div>
  )
}

export default Footer

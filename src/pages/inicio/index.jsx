import './index.scss'
import { useState } from 'react'
import Cabecalho from '../../components/cabecalho'
import Card from '../../components/cards'

export default function Inicio() {

    return (
        <div className='pagina-inicio'>
            <Cabecalho />

            <div className='conteudos'>
                <h1 className='titulo'>Conteúdos</h1>

                <div className='cards'>
                    <Card
                        titulo='Componentes'
                        topicos='- Objetos e Listas de Objetos'
                        data='26/agosto'
                        tema = '#EFFBE2'
                        tituloCor = '#A3E5BA'
                        entrega = ''
                    />

                    <Card
                        titulo='Renderização e Efeito'
                        topicos='- Componentes na Renderização'
                        data='2/setembro'
                        tema = '#EDE2FBE5'
                        tituloCor = '#DCA3E5'
                        entrega = ''
                    />

                    <Card 
                        titulo = 'Consumindo APIs'
                        topicos = '- Componentes na Renderização'
                        data = '9/setembro'
                        tema = '#f2f2f2'
                        tituloCor = '#C3C3C3'
                        entrega = 'Entrega Trab.'
                    />

                    <Card 
                        titulo = 'Prova Prática e Teórica'
                        topicos = '- Criando um projeto React'
                        data = '16/setembro'
                        tema = '#FAF4C1'
                        tituloCor = '#F6E448'
                        entrega = ''
                    />

                </div>
            </div>
        </div>
    )
}
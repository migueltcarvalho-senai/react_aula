import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import {livros} from './dadosPesquisa'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002f52 35%, #326589);
    color: #FFF;
    text-align: center;
    padding: 85px 0px;
    height: 270px;
    width: 100%;

`

const Resultado = styled.div`
    display: flex;
    Justify-content: center;
    align-itens: center;
    margin-bottom: 20px;
    cursor: pointer;
    p{
        width:200px
    
    
    }
        img{
            width:100px
        }
        &:hover{
            border: 1px solid white 
        }
`

const Titulo = styled.h2`
    color: #fff;
    font-size: 36px;
    text-align: center;
    width:100%;


`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weigth: 500;
    margin-bottom: 40px;

`


function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    return (
        <PesquisaContainer>
            <h2>Ja sabe por onde Começar?</h2>
            <h3>Encontre Seu Livro em nossa Estante.</h3>
            <Input placeholder="Escreva sua Próxima Leitura" 
                onBlur={evento => {
                    const textoDigitado = evento.target.value;
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
                // Estados sao variaveis mutaveis dos componentes que fazem parte da montagem da pagina
            />

             {livrosPesquisados.map( livro=>(
                    <Resultado>
                        <p>{livro.nome}</p>
                        <img src={livro.src}></img>
                    </Resultado>
             ))
             }
        </PesquisaContainer>


    )
}
export default Pesquisa
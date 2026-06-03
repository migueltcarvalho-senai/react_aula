import { livros } from './dadosUltimosLancamentos'
import CardRecomenda from '../CardRecomenda'
import ImagemLivro from "../../imagens/livro2.png"

import styled from 'styled-components'
import {Titulo} from '../Titulo'
const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`
const NovosLivros = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`


function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
            cor={"#000"} 
            tamanhoFonte={"36px"}
            alinhamento={'center'}
            corFundo={'#FFF'}
            >ULTIMOS LANCAMENTOS</Titulo>
            <NovosLivros>
            {livros.map(livro => (
                <img src={livro.src} />
            ))}
            </NovosLivros>
           <CardRecomenda 
           titulo ="Talvez voce se interesse por: "
           subtitulo="Angular 11"
           descricao="Construindo uma Aplicação com a integração Google"
            img={ImagemLivro}
            />

        </UltimosLancamentosContainer>
    )

} export default UltimosLancamentos
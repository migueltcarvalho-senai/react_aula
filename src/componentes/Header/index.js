
import Logo from '../Logo'
import OpcoesHeader from '../opcoesHeader'
import Icones from '../IconeHeader'
import './estilo.css'

function Header() {
    return (
        <header className='App-header'>
            <Logo></Logo>
            <OpcoesHeader></OpcoesHeader>
            <Icones></Icones>
        </header>
    );
}

export default Header
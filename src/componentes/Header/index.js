
import Logo from '../Logo'
import OpcoesHeader from '../opcoesHeader'
import Icones from '../IconeHeader'
import styled from 'styled-components';


const HeaderContainer = styled.header`

  background-color: #fff;
  display: flex;
  justify-content: center;

`




function Header() {
    return (
        <header className='App-header'>
            <HeaderContainer>
                <Logo></Logo>
                <OpcoesHeader></OpcoesHeader>
                <Icones></Icones>
            </HeaderContainer>
        </header>
    );
}

export default Header
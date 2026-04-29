import logo from '../../imagens/logo.svg'
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
  text-align: center;
`

const LogoImg = styled.img`
    margin-right: 10px;
    width: 100px;
`


function Logo() {
    return (
        <LogoContainer>
            <LogoImg src={logo} alt='logo' className='logo-img'></LogoImg>
            <p><strong> SENAI Book</strong></p>
        </LogoContainer>
    )

}
export default Logo
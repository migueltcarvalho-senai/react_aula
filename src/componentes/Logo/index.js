import logo from '../../imagens/logo.svg'
import './estilo.css'


function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt='logo' className='logo-img'></img>
            <p><strong> SENAI Books </strong></p>
        </div>
    )

}
export default Logo
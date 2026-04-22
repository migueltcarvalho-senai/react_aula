import './App.css';
import Logo from './componentes/Logo'
import OpcoesHeader from './componentes/opcoesHeader'
import Icones from './componentes/IconeHeader'




function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>
        <Icones></Icones>

      </header>
    </div>
  );
}

export default App;

import './App.css';
import Header from './componentes/Header'
import styled from 'styled-components';

const AppContainer = `
  width: 100vw;
  height: 100vw;
  background-image: linear-gradient(90deg, #002f55 35%, #326589);

li{
  list-style: none;
}
  
`


function App() {
  return (
      <AppContainer>
        <Header></Header>
      </AppContainer>
  );
}

export default App;

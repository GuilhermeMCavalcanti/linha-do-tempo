import './App.css';
import Feed from "./components/Feed";
import Stories from "./components/Stories";
import Recommended from './components/Recommended';

function App() {
  return (
    <div className="Layout">
      <div className="Menu">
        <h1>Linha do Tempo</h1>
        <ul>
          <li>Página inicial</li>
          <li>Pesquisa</li>
          <li>Explorar</li>
          <li>Notificações</li>
          <li>Perfil</li>
        </ul>
      </div>

      <div className="Center">
        <Stories/>
        <Feed/>
      </div>
        <Recommended/>

      </div>
  );
}

export default App;

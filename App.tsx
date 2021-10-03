import { BrowserRouter, Route } from 'react-router-dom';
import { CadastroNF } from "./pages/CadastroNF";
import { CadastroUsuario } from './pages/CadastroUsuario';
import { Combustiveis } from './pages/Combustiveis';
import { Corretivos } from './pages/Corretivos';
import { FertiOrganicos } from './pages/FertiOrganicos';
import { FertiSinteticos } from './pages/FertiSinteticos';
import { Home } from "./pages/Home";
import { InfoProdutor } from './pages/InfoProdutor';
import { Sementes } from './pages/Sementes';


function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/cadastro/nf" component={CadastroNF}/>
      <Route path="/cadastro/usuario" component={CadastroUsuario}/>
      <Route path="/combustiveis" component={Combustiveis}/>
      <Route path="/corretivos" component={Corretivos}/>
      <Route path="/fertilizantes/organicos" component={FertiOrganicos}/>
      <Route path="/fertilizantes/sinteticos" component={FertiSinteticos}/>
      <Route path="/informacoes/produtor" component={InfoProdutor}/>
      <Route path="/sementes" component={Sementes}/>
    </BrowserRouter>
  );
}

export default App;

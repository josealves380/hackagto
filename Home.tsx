import { useHistory } from 'react-router-dom';
import logoImg from '../assets/images/logo.png';
import imageImg from '../assets/images/image.png';
import { Button } from '../components/Button';
import {Link} from 'react-router-dom';

import '../styles/auth.scss';
import { Input } from '../components/Input';


export function Home() {
    const history = useHistory();

    function navigateToCadastroNF() {
        history.push('/cadastro/nf')
    }
    return(
        <div id="page-auth">
           <main>
            <img src={logoImg} alt="Logo"/>
                <h1>HackAgro</h1>
                <form>
                    <Input 
                    type="email" 
                    placeholder="E-mail"
                    />                   
                </form>
                <form>
                    <Input
                    type="senha"
                    placeholder="Senha" 
                    />                    
                </form>
                <Button onClick={navigateToCadastroNF}>Login</Button>
                <p>Para criar cadastro <Link to="/cadastro/usuario">clique aqui</Link></p>
           </main>
            <aside>
                <img src={imageImg} alt="Ilustração da página"/>
            </aside>
            
        </div>
    )
}
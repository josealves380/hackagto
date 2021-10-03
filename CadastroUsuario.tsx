import { useHistory } from 'react-router-dom';
import { Button } from "../components/Button";

export function CadastroUsuario() {
    const history = useHistory();

    function navigateToLogar() {
        history.push('/')
    }

    return(
        <div>
            <Button
            onClick={navigateToLogar}
            >
                Logar
            </Button>
            <Button>
                Cadastrar
            </Button>
        </div>
    )
}
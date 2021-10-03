import logoImg from '../assets/images/logo.png';
import '../styles/header.scss';

export function Header() {
    return(
       <div >
           <aside >
            <img src={logoImg} alt="logo" />
            <h2 className='title'>HackAgro</h2>
            <p className='insumo'>Insumos</p>
            <p className='usuario'>Usuários</p>
            <select className='opcao'>
                <option value="option1">Jonathan</option>
            </select>
           </aside>
        </div>
    );
}

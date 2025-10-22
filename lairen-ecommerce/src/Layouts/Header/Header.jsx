import { Nav } from '../Nav/Nav';
import { Link } from 'react-router-dom'
import './Header.css';
import blackLogo from '../../assets/ui/lairen-nuevo-negro.png';

export const Header = () => {
    return (
        <header>
            <div>
                <Link to={'/'}>
                    <img src={blackLogo} alt='logo lairen'/>
                </Link>
            </div>
            <Nav />
        </header>
    )
}
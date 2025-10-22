import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext/useCartContext'
import './Nav.css'

export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const { getTotalItems } = useCartContext();

    return (
        <nav>
            <button className='menu-toggle' onClick={toggleMenu}>
                ☰
            </button>

            <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/expansion/profundidades'}>Profundidades</Link>
                </li>
                <li>
                    <Link to={'/expansion/ancestros'}>Ancestros</Link>
                </li>
                <li>
                    <Link to={'/cart'}>Cart</Link>
                    {getTotalItems() > 0 && (<span className='in-cart'>{getTotalItems()}</span>) }
                </li>
            </ul>
        </nav>
    )
}
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { memo, useEffect, useState } from 'react';
import './styles.scss';
import logo from '../../Imgs/logo.png'
import menuIcon from '../../Imgs/cardapio.png'
import menuIconOpen from '../../Imgs/menu-icon-open.png'

export function HeaderComponent(){
    const [isOpen, setIsOpen] = useState(false)
    const openMenu = () => {
        setIsOpen(!isOpen)
    }
    const [scrollPosition, setScrollPosition] = useState(0);
    
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
   return(        
    <header className='myHeader' id={scrollPosition || isOpen ? 'meu-teste' : ''}> 
        <nav className='nav-bar'>
            <div className='logo-container'>
                <img src={logo} alt='logo Gabriel do Cell' />
            </div>
            
            <div className='desktop-menu'>
                <ul className='nav-list-desktop'>
                    <li className='nav-item'><a href="#"> Início</a></li>
                    <li className='nav-item'><a href="#"> Apple Wathc</a></li>
                    <li className='nav-item'><a href="#"> Iphone</a></li>
                    <li className='nav-item'><a href="#"> Vantagens</a></li>
                    <li className='nav-item'><a href="#"> Nossos Produtos</a></li>
                    <li className='nav-item'><a href="#"> Contato</a></li>
                </ul>
            </div>
            
            <div className='mobile-icon'>
                <button onClick={() => openMenu()}>
                    <img className='icon-nav' src={ isOpen ? menuIconOpen : menuIcon} />
                </button>
            </div>
        </nav>
        {isOpen && (
        <div className='mobile-menu'>
                <ul className='nav-list-mobile'>
                    <li className='nav-item'><a href="#"> Início</a></li>
                    <li className='nav-item'><a href="#"> Apple Wathc</a></li>
                    <li className='nav-item'><a href="#"> Iphone</a></li>
                    <li className='nav-item'><a href="#"> Vantagens</a></li>
                    <li className='nav-item'><a href="#"> Nossos Produtos</a></li>
                    <li className='nav-item'><a href="#"> Contato</a></li>
                </ul>
            </div>
        )}
    </header>
   ) 
}


export const Header = memo(HeaderComponent)
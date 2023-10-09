/* eslint-disable jsx-a11y/alt-text */
import { memo } from 'react';
import './styles.scss';
import IphoneAppleWatch from '../../Imgs/principalImage.png'


export function SectionApresentation(){
    
   return(
    <main className='apresentation-container'> 
        <section className='discripition-container'>
            <h1>
             Seja bem Vindo
            </h1>
        <span>                        
            Aqui na gabriel do cell nós procuramos sempre prestar o melhor atendimento possivel visando sempre a necessidade e a satisfação do cliente
        </span>
        <button>
            Ver Produtos
        </button>    
        </section>
        <aside className='image-container'>
            <img className='principal-image' src={IphoneAppleWatch} alt="aplle watch e iphone" />
        </aside>
    </main>
   ) 
}


export const Header = memo(SectionApresentation)
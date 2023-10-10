/* eslint-disable jsx-a11y/alt-text */
import React, { memo } from 'react';
import './styles.scss';

 interface ChildrenBoxGradient{
    message: string;
}

export function BorderBoxGradient({message}: ChildrenBoxGradient){
    
   return(
    
    <div className='caixa'>
         <h3>
            {message}
         </h3>
    </div>
       
    
   ) 
}


export const Header = memo(BorderBoxGradient)
/* eslint-disable jsx-a11y/alt-text */
import React, { memo } from 'react';
import './styles.scss';


interface infoQuality {
   imageIcon: string,
   title: String,
   description: String,
   
}

 interface Props{
   imagePrincipal: string;
    position: string;
    textColor: String;
    infoLeft: Array<infoQuality>;
    infoRigth: Array<infoQuality>;
}



export function InfoComplement(props: Props){
    
   return(
    <div className='container'>
      <div className='info-container'>
       {props?.infoRigth?.map((info) => {
          return (
             <div className='info' id='rigth'>
                   <img src={info.imageIcon} alt="" />
                   <h2>
                      {info.title}
                   </h2>
                   <span>
                      {info.description}
                   </span>
                </div>
            )
         })}
      </div>
      
         <img className='principalImage' src={props.imagePrincipal} />
         
      <div className='info-container'>
         {props?.infoLeft?.map((info) => {
               return (
                     <div className='info' id='left'>
                           <img src={info.imageIcon} alt="" />
                        <h2>
                           {info.title}
                        </h2>
                        <span>
                           {info.description}
                        </span>
                     </div>
               )
         })}
   </div>
    </div>
       
    
   ) 
}


export const Header = memo(InfoComplement)
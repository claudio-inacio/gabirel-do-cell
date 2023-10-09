import styled from "styled-components";


export const Container = styled.body` 
     @media(max-width: 520px){
          padding: 1rem 1rem 0px;
          flex-direction: column; 
          
          align-items: center;
          justify-content: start ;  
     }
     @media (min-width: 521px) and (max-width: 1040px){
          flex-direction: column;  
          padding: 2rem 2rem 0px;
          align-items: center;
          max-height: 630px;
          justify-content: start ;  
     }
     @media(min-width: 1041px){
          padding: 4rem 4rem 0px;
          max-height: 421px;
          justify-content: space-between ; 
     }
     display: flex;
     height: 100%;
     max-height: 600px;
     
     
`;
export const Description = styled.section`
     @media(max-width: 520px){
          max-width: 540px;
     }
     @media(min-width: 521px) and (max-width: 1040px){
          max-width: 540px;
     }
     @media(min-width: 1041px){
          max-width: 540px;
     }
     width: 100%;
`;

export const Tittle = styled.h2`  
     @media(max-width: 520px){
          font-size: 1.6rem;          
     }
     @media(min-width: 521px) and (max-width: 1040px){ 
          font-size: 1.8rem;        
     }  
     @media(min-width: 1041px) { 
         font-size: 44px;
     }   
     color: black;
  
`
export const Message = styled.p`
     @media(max-width: 520px){
          font-size: 0.90rem;
          margin-top: 1rem;              
     }
     @media(min-width: 521px) and (max-width: 1040px){ 
          font-size: 1rem;  
          padding: 1.5rem 2rem 0rem 0px;
     }  
     @media(min-width: 1041px) { 
          font-size: 1.5rem;
          padding-top: 3rem;
      }   
`
 
 export const ButtonContainer = styled.div`  
     @media(max-width: 520px){ 
          flex-direction: column;
          justify-content: space-between;          
          align-items: center;
          margin-top: 1.8rem;
          max-width: 450px;
}     
     @media(min-width: 521px) and (max-width: 1040px){ 
          margin-top: 2rem;
          max-width: 455px;          
          flex-direction: row;
          align-items: start;
          justify-content: space-around;          
}     
     
     @media(min-width: 1041px) { 
          padding: 3.5rem 0rem 0rem;
          justify-content: space-between;
      }   
     display: flex;
     width: 100%;
`;

   
export const ImageContainer = styled.aside`  
     max-width: 540px;
     height: 450px;
     max-height: 450px;          
     padding-top: 2rem;
`;

export const HomeImage = styled.img`
     width: 100%;

`



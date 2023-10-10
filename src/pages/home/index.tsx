import React from "react";
import './styles.scss';
import { SectionApresentation } from "../../components/Apresentation";
import { IphoneInfo } from "../../components/Iphone-Info";
import { AppleWatchInfo } from "../../components/apple-watch-info";



export const Home = () => {
  
  return (
  <>
    <SectionApresentation />  
    <div className="info-products-container">
       <IphoneInfo />  
    < AppleWatchInfo />
    </div>
  </>
  );
};

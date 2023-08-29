import React, { useState } from 'react';
import  "../styles/card.css"
  
const Card = ({cardIcon, cardLabel, cardInfo, theme}) => {

    return (
        <div data-testid="card-1" className={theme == "dark" ? "card_wrap_dark" : "card_wrap"}>
            <div className={theme == "dark" ? "card_icon_dark" : "card_icon"}>
                <i className={cardIcon}></i>
            </div>
            <span className={theme == "dark" ? "card_label_dark" : "card_label"}>{cardLabel}</span>
            <div className={theme == "dark" ? "card_info_dark" : "card_info"}>{cardInfo}</div>
        </div>
    );
}
export default Card;
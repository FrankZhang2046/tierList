import React from 'react';
import TierChanger from '../TierChanger/TierChanger';
import './ImageCard.scss';

const ImageCard =props=>{
    return(
        <div className="image-card">
            <img src={props.imageUrl} alt="" className="image-card__image"/>
            <TierChanger />
        </div>
    )
}

export default ImageCard;
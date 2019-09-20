import React from 'react';
import './Tier.scss';
import ImageCard from '../ImageCard/ImageCard';

const Tier=props=>{
    const { name, color, cards } = props;

    return(
        <div className="tier">
            <div className="tier__cover" style={{background:`#${color}`}}>
                <p className="tier__cover--label">{name}</p>
            </div>
            <div className="tier__cards-area">
                {(cards && cards.length>0 )? cards.map(
                    card => <ImageCard imageUrl={card.path} changeTier={props.changeTier}/>
                ) : null}
            </div>
        </div>
    )
}

export default Tier;
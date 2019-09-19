import React from 'react';
import './Tier.scss';

const Tier=props=>{
    const { name, color } = props;

    return(
        <div className="tier">
            <div className="tier__cover" style={{background:`#${color}`}}>
                <p className="tier__cover--label">{name}</p>
            </div>
            <div className="tier__cards-area"></div>
        </div>
    )
}

export default Tier;
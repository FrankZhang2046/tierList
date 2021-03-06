import React from 'react';
import ImageCard from '../ImageCard/ImageCard';

const StagingArea = props => {
    return(
        <div className='staging-area'>
            {props.cards.map(
                card => <ImageCard imageUrl={card.path} tier={card.tier} changeTier={props.changeTier}/>
            )}
        </div>
    )
}

export default StagingArea;
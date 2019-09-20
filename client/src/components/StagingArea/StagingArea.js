import React from 'react';
import ImageCard from '../ImageCard/ImageCard';

const StagingArea = props => {
    return(
        <div className='staging-area'>
            {props.cards.map(
                imageUrl => <ImageCard imageUrl={imageUrl}/>
            )}
        </div>
    )
}

export default StagingArea;
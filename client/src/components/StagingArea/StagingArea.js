import React from 'react';

const StagingArea = props => {
    return(
        <div className='staging-area'>
            {props.cards.map(
                card => <img style={{width:'65', height:'65px', objectFit:'cover'}} src={card} alt=""/>
            )}
        </div>
    )
}

export default StagingArea;
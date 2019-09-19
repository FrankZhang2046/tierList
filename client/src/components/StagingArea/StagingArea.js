import React from 'react';

const StagingArea = props => {
    return(
        <div className='staging-area'>
            {props.cards.map(
                card => <img style={{'width':'50px', 'height':'50px'}} src={card} alt=""/>
            )}
        </div>
    )
}

export default StagingArea;
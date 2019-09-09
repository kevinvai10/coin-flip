import React from 'react'

const Coin = ({side}) => {
    return(
        <div>
            <img src={`https://tinyurl.com/react-coin-${side}-jpg`} alt="coin" style={{width: 400}}/>
        </div>
    )
}

export default Coin;
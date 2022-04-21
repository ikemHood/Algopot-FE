import React, { useState } from 'react'
import { FaArrowDown, FaArrowUp, FaPlusCircle, FaStar } from "react-icons/fa";
import img from '../assets/chainBlock.png'
import './TokenStyles.css'


const Card = (props) => {

    const { handleBookmark, handleupvote, logo, token_name, token_description, algo_price, usd_price, price_direction, total_votes} = props
    
    const [isUp, setIsUp] = useState(true)
    const [ isBookMarked, setIsBookmarked] = useState(false)


    return ( 
        <div className="Card">
            <div className="card-head">
                <div className="card-flex1">
                    <img src={logo} alt="" />
                    <h3>Short</h3>
                </div>
                <div className="card-flex2">
                    <h3 className="tok-name">{token_name}</h3>
                  {isBookMarked ? (  <FaStar onClick={handleBookmark} id="star" size={30} style={{ color: 'white'}} />
                ) : ( 
                  <FaStar onClick={handleBookmark} id="star" size={30} style={{ color: 'white'}} />) }
                </div>
                <div className="description">
                    <p className="tok-desc">
                        {token_description}
                    </p>
                </div>
                <div className="card-flex3">
                    <div className="algo">
                        <h3>Algo Price</h3>
                        <p>{algo_price}</p>
                    </div>
                    <div className="usd">
                        <h3>Usd Price</h3>
                        <p>{usd_price}</p>
                    </div>
                    <div className="dir">
                        <h3>24h Change</h3>
                      { isUp ?  ( <FaArrowUp id="up" size={20} style={{ color: 'white'}}/> 
                      ) : (
                          <FaArrowDown id="up" size={20} style={{ color: 'white'}}/>
                      ) }
                    </div>
                </div>
                <div className="card-flex2">
                    <div className="vote">
                        <FaPlusCircle onClick={handleupvote} id="vote" size={20} style={{ color: 'white'}} /> <h3>Vote</h3>
                    </div>
                    <div className="votes">
                        <h3>Total Votes</h3>
                        <p>{total_votes}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Card;
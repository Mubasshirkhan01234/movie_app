import React, { useState } from "react";
import './listItem.scss';

export default function ListItem({index}) {

    const[isHovered, setIsHovered] = useState(false);
    const trailer =  "https://www.youtube.com/embed/dlC1tNsr-n8";

    return(
        <div className="listItem" style={{left: isHovered && index * 225 - 50 + index * 2.5}} onMouseEnter = {() =>setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img src="https://i.ibb.co/whyCzKt/the-batman-movie-poster-art-5k-ex.jpg" alt="" />
            {isHovered && (
                <>
                    
                    <video src={trailer} autoPlay loop></video>
                    
                    <div className="itemInfo">
                        <div className="icons">
                            <i class="ri-play-fill icon"></i>
                            <i class="ri-add-line icon"></i>
                            <i class="ri-thumb-up-line icon"></i>
                            <i class="ri-thumb-down-line icon"></i>
                        </div>
                        <div className="itemInfoTop">
                            <span>1 hour 14 mins</span>
                            <span className="limit">16+</span>
                            <span>1999</span>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nesciunt laudantium odio illo! Saepe aut illum, a architecto eum explicabo.
                        </div>
                        <div className="genre">Action</div>
                    </div>
                </>
            )}
        </div>
    );
};

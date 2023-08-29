import React from "react";
import './featured.scss';

const Featured = ({ type }) => {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>--Genre--</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documetary">Documetary</option>
                    </select>
                </div>
            )}
            <img src="https://i.ibb.co/SxnH1W2/top1.jpg" alt="" />

            <div className="info">
                <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium asperiores voluptatibus inventore iure eveniet laborum debitis sint sapiente pariatur ut mollitia maxime.</span>
                <div className="buttons">
                    <button className="play">
                        <i class="ri-play-fill"></i>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <i class="ri-information-line"></i>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured;
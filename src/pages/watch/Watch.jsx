import React from "react";
import './watch.scss'

export default function Watch() {
    return(
        <div className="watch">
            <div className="back">
                <i class="ri-arrow-left-line"></i>
                Home
            </div>
            <video className="video" src="https://www.youtube.com/embed/dlC1tNsr-n8" autoPlay progress controls></video>
        </div>
    )
}
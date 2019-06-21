import React from 'react';
import Gallery from "../components/Gallery"

const images = [
    "https://66.media.tumblr.com/492a1ec27de1e698e4681063274a0f96/tumblr_p9q2xg3NW51qjs67jo1_1280.png", "https://66.media.tumblr.com/91303b0c9e5f25db845510ddb8107c1b/tumblr_p9q2xg3NW51qjs67jo2_1280.png"
]

function Comics() {
    return (
        <div>
            <Gallery images={images} />
        </div>
    )
}

export default Comics;
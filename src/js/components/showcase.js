import React, {Component} from 'react'

function Showcase (props){
    return (
        <div className="row justify-content-center">
            <div className="col-md-6 showcase-image">
                <img src = {props.imageSrc} />
            </div>
        </div>
    )
}

export default Showcase;
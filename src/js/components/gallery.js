import React, { Component } from 'react';
import Showcase from './showcase';

class Gallery extends Component{
    
    constructor(props) {
        super(props);

        this.state = {
            mediaSrcs: [
                "./img/telegram.png",
                "./img/facebook.png",
                "./img/github.png"
            ],
            activeIndex: 0
        }
    }

    handleUploadClick(){
        /*TODO */
    }

    handleGalleryClick(e) {
        let li = e.target.closest("li");

        if (!li)
            return;
        this.setState({
            activeIndex: li.getAttribute('index')
        });
        
    }

    render(){
        return (
            <div>
                <Showcase imageSrc = {this.state.mediaSrcs[this.state.activeIndex]}/>
                <div className = "container-fluid line" >
                    <div className = "row">
                        <div className = "col-md-8 offset-md-2 align-self-cener">
                            <ul className = "list-inline text-center" onClick = {this.handleGalleryClick.bind(this)}>
                                {this.state.mediaSrcs.map((source, index) => (
                                    <li index = {index} className = "list-inline-item gallery-image" key = {index}>
                                        <img src = {source}/>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className = "col-md-2 align-self-center">
                            <button onClick = {this.handleGalleryClick.bind(this)} className = "btn btn-primary" > Add image </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;
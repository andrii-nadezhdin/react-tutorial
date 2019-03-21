import React from 'react';
import './ImageList.css';

const ImageList = (props) => {
    var images = props.images.map(({id, description, urls}) => <img key={id} alt={description} src={urls.regular}></img>);
    return <div className="image-list">{images}</div>;
}

export default ImageList;
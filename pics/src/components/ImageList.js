import React from 'react';

const ImageList = (props) => {
    var images = props.images.map(({id, description, urls}) => <img key={id} alt={description} src={urls.regular}></img>);
    return <div>{images}</div>;
}

export default ImageList;
import React from "react";
import './App.css';

const HornedBeast = (props) => {
    const { title, imageURL, description } = props;
    console.log(imageURL)

return (
    <div>
        <h2>{title}</h2>
        <img src={imageURL} alt={title} title={title} />
        <p>{description}</p>
    </div>
);
};

export default HornedBeast;
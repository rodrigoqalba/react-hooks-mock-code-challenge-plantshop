import React from "react";

function PlantCard({plantObj:{id, name, image="https://via.placeholder.com/400", price}}) {
  return (
    <li className="card" key={id}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;

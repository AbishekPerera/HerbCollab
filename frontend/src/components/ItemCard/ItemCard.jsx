import React from "react";
import PropTypes from "prop-types";
import "./ItemCard.css";

const Card = ({ id, title, image, price }) => {
  return (
    <div className="card ltn__product-item ltn__product-item-3 text-center">
      <h2 className="title">{title}</h2>
      <img className="image" src={image} alt={title} />
      <p className="price">{price}</p>
      <div class="product-hover-action">
        <ul>
          <li>
            <a>
              <i class="bi bi-eye-fill"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Card;

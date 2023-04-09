import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
`;

const StyledTitle = styled.h2`
  font-size: 20px;
  margin: 0 0 16px;
`;

const StyledImage = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin-bottom: 16px;
`;

const StyledPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 16px;
`;

const Card = ({ title, image, price }) => {
  return (
    <StyledCard>
      <StyledTitle>{title}</StyledTitle>
      <StyledImage src={image} alt={title} />
      <StyledPrice>{price}</StyledPrice>
    </StyledCard>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Card;

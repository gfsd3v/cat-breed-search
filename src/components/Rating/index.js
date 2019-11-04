/* eslint-disable array-callback-return */
import React from "react";
import styled from "styled-components";
import StarIcon from "@icons/material/StarIcon";
import StarHalfIcon from "@icons/material/StarHalfIcon";
import StarOutlineIcon from "@icons/material/StarOutlineIcon";

const SizedIcon = ({ icon, color, size, margin, onClick }) => {
  const Icon = styled(icon)`
    width: ${size} !important;
    height: ${size} !important;
    margin: ${margin};
  `;
  return <Icon onClick={onClick} color={color} />;
};

const StarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: ${props => props.spacing};
  width: 100%;
`;

const IconWrapper = styled.div`
  margin: 0;
  padding: 0;
`;

const Rating = ({ score, maxScore, starSize, starJustify, color }) => {
  const starList = [];
  const starRatio = maxScore / 5;
  const filledStars = Math.floor(score / starRatio);
  const halfStars = Math.ceil((score % starRatio) / starRatio);
  const emptyStars = 5 - filledStars - halfStars;
  for (let i = 0; i < filledStars; i++) starList.push({ fillMode: "full" });
  for (let i = 0; i < halfStars; i++) starList.push({ fillMode: "half" });
  for (let i = 0; i < emptyStars; i++) starList.push({ fillMode: "empty" });
  return (
    <StarWrapper spacing={starJustify}>
      {starList.map((star, index) => {
        if (star.fillMode === "full") {
          return (
            <IconWrapper key={index}>
              <SizedIcon icon={StarIcon} size={starSize} color={color} />
            </IconWrapper>
          );
        }
        if (star.fillMode === "half") {
          return (
            <IconWrapper key={index}>
              <SizedIcon icon={StarHalfIcon} size={starSize} color={color} />
            </IconWrapper>
          );
        }
        if (star.fillMode === "empty") {
          return (
            <IconWrapper key={index}>
              <SizedIcon icon={StarOutlineIcon} size={starSize} color={color} />
            </IconWrapper>
          );
        }
      })}
    </StarWrapper>
  );
};

export default Rating;

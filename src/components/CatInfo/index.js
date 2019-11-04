import * as React from "react";
import styled from "styled-components";
import DefaultTheme from "themes/defaultTheme";
import Rating from "components/Rating";

const Wrapper = styled.div`
  display: flex;
  margin: 2vh 0 2vh 0;
  font-family: ${DefaultTheme.font.primary};
`;

const Image = styled.img`
  margin: 0 20px 0 0;
  width: 30vw;
  height: 30vw;
  max-width: 160px;
  max-height: 155px;
  object-fit: fill;
  align-self: flex-start;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Name = styled.div`
  font-weight: 500;
  font-size: 1rem;
  color: ${DefaultTheme.colors.blackText};
`;

const Description = styled.div`
  font-size: 0.8rem;
  color: ${DefaultTheme.colors.blackText};
  margin-bottom: 1.5vh;
`;

const RatingTitle = styled.div`
  font-size: 0.8rem;
  color: ${DefaultTheme.colors.blackText};
  width: 125px;

  @media all and (max-width: 800px) {
    width: 100%;
  }
`;

const RatingsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  align-items: center;
  @media all and (max-width: 800px) {
    flex-direction: column;
  }
`;

const CatInfo = ({ breed, description, image, ratings }) => {
  return (
    <Wrapper style={{ color: "black" }}>
      <Image src={image} alt="foto do gato" />
      <InfoWrapper>
        <Name>{breed}</Name>
        <Description>{description || "No description found"}</Description>
        <RatingsWrapper>
          <RatingTitle>Affection Level </RatingTitle>
          <Rating
            score={ratings.affectionLevel || 0}
            maxScore={5}
            color={DefaultTheme.colors.lightGreen}
          />
        </RatingsWrapper>
        <RatingsWrapper>
          <RatingTitle>Adaptability </RatingTitle>
          <Rating
            score={ratings.adaptability || 0}
            maxScore={5}
            color={DefaultTheme.colors.lightGreen}
          />
        </RatingsWrapper>
        <RatingsWrapper>
          <RatingTitle>Child Friendly </RatingTitle>
          <Rating
            score={ratings.childFriendly || 0}
            maxScore={5}
            color={DefaultTheme.colors.lightGreen}
          />
        </RatingsWrapper>
        <RatingsWrapper>
          <RatingTitle>Dog Friendly </RatingTitle>
          <Rating
            score={ratings.dogFriendly || 0}
            maxScore={5}
            color={DefaultTheme.colors.lightGreen}
          />
        </RatingsWrapper>
      </InfoWrapper>
    </Wrapper>
  );
};

export default CatInfo;

import styled from "styled-components";

export const BoardGamePageWrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.dark};
`;

export const LeftSide = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.colors.darkGreen};
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  position: relative;
  top: -1rem;
`;

export const RightSide = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReviewsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const H1Rubik = styled.h1`
  font-family: ${(props) => props.theme.fonts.rubikBold};
  color: ${(props) => props.theme.colors.white};
`;

export const ReviewsCardWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin: 3rem 0;
`;

export const ChallengesSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

export const H1GameFont = styled.h2`
  font-family: ${(props) => props.theme.fonts.gameFont};
  color: ${(props) => props.theme.colors.white};
`;

export const ChallengesCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin: 3rem 0;
`;

export const OnlineBattlesSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

export const OnlineBattleCardWrapper = styled.div`
  margin: 3rem 0;
`;

export const NoReviews = styled.h5`
  color: ${(props) => props.theme.colors.lightGreen};
  font-family: ${(props) => props.theme.fonts.rubikBold};
  font-size: 1rem;
`;

import styled from "styled-components";

export const OnlineBattleCardWrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.white};
  height: 25rem;
  width: 40rem;
  display: flex;
  border-radius: ${(props) => props.theme.border["10px"]};
  margin: 2rem;

  .play {
    position: absolute;
    left: 35%;
    margin-top: 1rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 20rem;
    margin: 2rem 0;

    .play {
      left: 22%;
    }
  }

  @media (min-width: ${(props) =>
      props.theme.breakpoints.sm}) and (max-width: ${(props) =>
      props.theme.breakpoints.md}) {
    width: 30rem;
  }
`;

export const BattleImage = styled.div`
  position: relative;
  width: 40%;

  img {
    border-top-left-radius: ${(props) => props.theme.border["10px"]};
    border-bottom-left-radius: ${(props) => props.theme.border["10px"]};
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 30%;
  }
`;

export const BattleCard = styled.div`
  width: 60%;
  padding: 0 3rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 70%;
    padding: 0 2rem;
  }
`;

export const BattleName = styled.h2`
  color: ${(props) => props.theme.colors.darkGreen};
  font-family: ${(props) => props.theme.fonts.quicksandBold};
  margin: 0;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: ${(props) => props.theme.fontSizes.xl};
  }
`;

export const BattleEnds = styled.p`
  font-family: ${(props) => props.theme.fonts.quicksandBold};

  color: ${(props) => props.theme.colors.mediumRed};
`;

export const Rank = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
  gap: 1rem;
`;

export const Place = styled.div`
  width: 3rem;
`;

export const Username = styled.div`
  font-family: ${(props) => props.theme.fonts.quicksandBold};
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;

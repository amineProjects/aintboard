import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { ChallengesPageWrapper, ChallengesCardContainer } from "./styled";
import ChallengesCard from "~/components/ChallengesCard";

const ChallengesPage = () => {
  const [cards, setCards] = useState({
    items: Array.from({ length: 9 }),
  });

  const fetchData = () => {
    setTimeout(() => {
      setCards({
        items: cards.items.concat(Array.from({ length: 9 })),
      });
    }, 2000);
  };

  return (
    <ChallengesPageWrapper>
      <InfiniteScroll
        dataLength={cards.items.length}
        next={fetchData}
        hasMore={true}
        loader={<h3>Loading...</h3>}
      >
        <ChallengesCardContainer>
          {cards.items.map((i, index) => (
            <ChallengesCard puAmount={index} />
          ))}
        </ChallengesCardContainer>
      </InfiniteScroll>
    </ChallengesPageWrapper>
  );
};

export default ChallengesPage;
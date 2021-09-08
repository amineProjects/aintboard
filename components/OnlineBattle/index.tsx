import { isEmpty } from "lodash";
import { useSWRInfinite } from "swr";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import fetcher from "~/util/fetch";
import { ONLINE_BATTLE_ITEM_COUNT } from "util/constants";
import OnlineBattleCard from "~/components/OnlineBattleCard";
import { OnlineBattlesApiResponse, OnlineBattlesData } from "~/types/types";
import { BattleCardContainer, BattleCardWrapper } from "./styles";
import { FilterState } from "~/types/reduxTypes";

const itemCount = ONLINE_BATTLE_ITEM_COUNT;

const OnlineBattle = () => {
  const ref = useRef(true);
  const firstRender = ref.current;
  const [items, setItems] = useState<any>([]);
  // we will use our own page size, not from swrInfinite, so that we will reset the page size everytime we visit the page
  const [pageSize, setPageSize] = useState(1);
  const filters = useSelector((state: FilterState) => state.filter.filters);
  const currentFilter = useRef(filters?.secondSelected);

  const {
    data: filteredApiData,
    setSize,
  } = useSWRInfinite<OnlineBattlesApiResponse>((pageIndex: number) => {
    const index = pageIndex + 1;

    return !isEmpty(filters?.secondSelected) && !firstRender
      ? `/api/online-battles/filter/${filters.firstSelected}/${
          filters.secondSelected
        }?first=${index * itemCount}&offset=${pageIndex * itemCount}`
      : `/api/online-battles?first=${itemCount}&offset=${
          pageIndex * itemCount
        }`;
  }, fetcher);

  useEffect(() => {
    if (currentFilter.current !== filters?.secondSelected) {
      //overwrite new items, when filter has been changed
      setItems(
        filteredApiData?.[pageSize - 1]?.response?.data?.onlineBattles || []
      );
    } else {
      //concat when infinite scrolling
      setItems((items: any[]) =>
        items.concat(
          filteredApiData?.[pageSize - 1]?.response?.data?.onlineBattles || []
        )
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredApiData, filters?.secondSelected]);

  ref.current = false;

  return (
    <BattleCardWrapper>
      <InfiniteScroll
        dataLength={items.length}
        next={() => {
          setSize(pageSize + 1);
          setPageSize(pageSize + 1);
        }}
        hasMore={
          filteredApiData?.[pageSize - 1]?.response?.data?.hasMore || false
        }
        loader={<h3>Loading...</h3>}
      >
        <BattleCardContainer className="box">
          {items.map((b: OnlineBattlesData, index: number) => (
            <OnlineBattleCard key={`${b._id}-${index}`} data={b} />
          ))}
        </BattleCardContainer>
      </InfiniteScroll>
    </BattleCardWrapper>
  );
};

export default OnlineBattle;

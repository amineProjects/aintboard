import useSWR from "swr";

import Header from "components/Header";
import Footer from "components/Common/Footer";
import BuyAvatar from "components/Avatar/BuyAvatar";

import fetcher from "~/util/fetch";
import { SpecialAvatarsApiResponse } from "~/types/types";

const BuyAvatarsPage = ({ specialAvatars }: Props) => {
  const { data: specialAvatarsData } = useSWR<SpecialAvatarsApiResponse>(
    "/api/special-avatars",
    fetcher,
    { initialData: specialAvatars }
  );

  if (typeof window === "undefined") {
    return <></>;
  }

  return (
    <>
      <Header isBuyAvatarsPage centerTagline="Buy Avatars" />
      <BuyAvatar
        specialAvatars={specialAvatarsData?.response?.data?.avatars || []}
      />
      <Footer />
    </>
  );
};

type Props = {
  specialAvatars: SpecialAvatarsApiResponse;
};

export default BuyAvatarsPage;

export async function getStaticProps() {
  const specialAvatars = await fetcher(
    `${process.env.NEXT_PUBLIC_API_URL}/api/special-avatars`
  );

  return {
    props: {
      specialAvatars,
    },
  };
}
import nc from "next-connect";

import { filterReviews } from "~/db/reviews";
import { all } from "~/middlewares";

const handler = nc();

handler.use(all);

handler.get(async (req, res) => {
  const { filter, field, first = null } = req.query;

  const reviews = await filterReviews(req.db, { filter, field, first });

  return res.json(reviews);
});

export default handler;

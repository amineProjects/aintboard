import nc from "next-connect";

import { filterChallenges } from "~/db/challenges";
import { all } from "~/middlewares";

const handler = nc();

handler.use(all);

handler.get(async (req, res) => {
  const { filter, field, first = null, approved = null } = req.query;

  const challenges = await filterChallenges(req.db, {
    filter,
    field,
    first,
    approved,
  });

  return res.json(challenges);
});

export default handler;

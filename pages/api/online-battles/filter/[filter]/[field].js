import nc from "next-connect";

import { filterOnlineBattles } from "~/db/onlineBattle";
import { all } from "~/middlewares";

const handler = nc();

handler.use(all);

handler.get(async (req, res) => {
  const { filter, field, first = null, offset = null } = req.query;

  const onlineBattles = await filterOnlineBattles(req.db, {
    filter,
    field,
    first,
    offset,
  });

  return res.json(onlineBattles);
});

export default handler;

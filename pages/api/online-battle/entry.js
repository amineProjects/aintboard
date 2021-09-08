import nc from "next-connect";

import { all } from "~/middlewares/index";
import { insertValidEntry } from "~/db/onlineBattle";
import { VERIFIED_STATUS } from "util/constants/onlineBattles";

const handler = nc();

handler.use(all);

handler.post(async (req, res) => {
  const {
    userId,
    battleId,
    score,
    message,
    googleLink,
    verifiedStatus = VERIFIED_STATUS.PENDING,
  } = req.body;

  const entry = await insertValidEntry(req.db, {
    userId,
    battleId,
    score,
    message,
    googleLink,
    verifiedStatus,
  });

  return res.json({ entry });
});

export default handler;

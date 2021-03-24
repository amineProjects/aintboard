import nc from "next-connect";

import { insertUserChallenges } from "~/db/userChallenges";
import { all } from "~/middlewares";

const handler = nc();

handler.use(all);

handler.post(async (req, res) => {
  const { userId } = req.query;
  const challengeId = parseInt(req.query.challengeId);
  const powerups = parseInt(req.query.powerups);

  const challenge = await insertUserChallenges(req.db, {
    userId,
    challengeId,
    powerups,
  });

  return res.json(challenge);
});

export default handler;

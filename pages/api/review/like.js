import nc from "next-connect";

import { likeReview } from "~/db/reviewLikes";
import { all } from "~/middlewares/index";

const handler = nc();

handler.use(all);

handler.post(async (req, res) => {
  const { userId, reviewId } = req.body;

  const reviewLike = await likeReview(req.db, {
    userId,
    reviewId,
  });

  // this token is from refreshing token in verifyToken
  // reviewLike.token = req.jwtToken;

  return res.json(reviewLike);
});

export default handler;

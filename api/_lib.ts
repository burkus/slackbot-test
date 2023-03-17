import { VercelRequest, VercelResponse } from "@vercel/node";

export async function respondToChallenge(req: VercelRequest, res: VercelResponse) {
    res.status(200).send({
        challenge: req.body.challenge
    })
}
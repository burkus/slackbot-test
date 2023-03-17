import { VercelRequest, VercelResponse } from "@vercel/node";
import axios from 'axios'

export async function respondToChallenge(req: VercelRequest, res: VercelResponse) {
    res.status(200).send({
        challenge: req.body.challenge
    })
}

export async function respondToMessage(url: string, text: string, thread: string) {
    const data = {
        text,
        "response_type": "in_channel",
        "replace_original": "false",
        "thread_ts": thread
    }
    axios
        .post(url, data)
        .then(console.log)
}
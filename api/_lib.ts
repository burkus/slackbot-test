import { VercelRequest, VercelResponse } from "@vercel/node";
import https from 'https'

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

    const options = {
        method: 'POST'
    }

    const request = https.request(options)
    request.write(data)
    request.end()
}
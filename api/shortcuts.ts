import { VercelRequest, VercelResponse } from '@vercel/node'
import { validateSlackRequest } from './_validate'
import { respondToMessage } from './_lib'

const { SLACK_SIGNING_SECRET } = process.env

export default async function shortcuts(req: VercelRequest, res: VercelResponse) {
    validateSlackRequest(req, SLACK_SIGNING_SECRET as string)

    if (req.body) {
        const { payload } = req.body
        const { type, response_url, message } = JSON.parse(payload)
        console.log(type, response_url, message)
        if (type === 'message_action') {
            await respondToMessage(response_url, "blah blah blah", message.ts)
            return res.status(200).send({
                text: 'bruh'
            })
        }
    }

    res.status(200).send({
        text: "hello"
    })
}
import { VercelRequest, VercelResponse } from '@vercel/node'
import { respondToChallenge } from './_lib'
import { validateSlackRequest } from './_validate'

const { SLACK_SIGNING_SECRET } = process.env

export default async function shortcuts(req: VercelRequest, res: VercelResponse) {
    console.log(req.body)
    validateSlackRequest(req, SLACK_SIGNING_SECRET as string)

    if (req.body) {
        const { type } = req.body

        if (type === 'url_verification') {
            await respondToChallenge(req, res)
        }

        else if (type === 'message_action') {
            return res.status(200).send({
                text: "blah blah blah"
            })
        }
    }

    res.status(200).send({
        text: "hello"
    })
}
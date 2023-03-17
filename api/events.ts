import { VercelRequest, VercelResponse } from '@vercel/node'
import { respondToChallenge } from './_lib'
import { validateSlackRequest } from './_validate'

const { SLACK_SIGNING_SECRET } = process.env

export default async function events(req: VercelRequest, res: VercelResponse) {
    validateSlackRequest(req, SLACK_SIGNING_SECRET as string)

    if (req.body) {
        const { type } = req.body

        if (type === 'url_verification') {
            await respondToChallenge(req, res)
        }

        else if (type === 'app_mention') {

        }
    }
}
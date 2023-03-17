import { App } from '@slack/bolt'
import { VercelRequest, VercelResponse } from '@vercel/node'
import { validateSlackRequest } from '_validate'

const { SLACK_SIGNING_SECRET } = process.env

export default async function events(req: VercelRequest, res: VercelResponse) {
    validateSlackRequest(req, SLACK_SIGNING_SECRET)
    if (req.body.event.type === 'app_mention') {

    }
}
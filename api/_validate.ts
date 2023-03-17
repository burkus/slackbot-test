// This code snippet is based on https://github.com/antonputra/tutorials/tree/main/lessons/076
import crypto from 'crypto'
import { VercelRequest } from '@vercel/node'

export function validateSlackRequest(event: VercelRequest, signingSecret: string) {
    const requestBody = JSON.stringify(event['body'])

    const headers = event.headers

    const timestamp = headers['x-slack-request-timestamp']
    const slackSignature = headers['x-slack-signature']
    const baseString = 'v0:' + timestamp + ':' + requestBody

    const hmac = crypto
        .createHmac('sha256', signingSecret)
        .update(baseString)
        .digest('hex')
    const computedSlackSignature = 'v0=' + hmac

    return computedSlackSignature === slackSignature
}
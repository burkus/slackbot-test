"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSlackRequest = void 0;
// This code snippet is based on https://github.com/antonputra/tutorials/tree/main/lessons/076
const crypto_1 = __importDefault(require("crypto"));
function validateSlackRequest(event, signingSecret) {
    const requestBody = JSON.stringify(event['body']);
    const headers = event.headers;
    const timestamp = headers['x-slack-request-timestamp'];
    const slackSignature = headers['x-slack-signature'];
    const baseString = 'v0:' + timestamp + ':' + requestBody;
    const hmac = crypto_1.default
        .createHmac('sha256', signingSecret)
        .update(baseString)
        .digest('hex');
    const computedSlackSignature = 'v0=' + hmac;
    return computedSlackSignature === slackSignature;
}
exports.validateSlackRequest = validateSlackRequest;

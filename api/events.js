"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const _lib_1 = require("./_lib");
const _validate_1 = require("./_validate");
const { SLACK_SIGNING_SECRET } = process.env;
function events(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, _validate_1.validateSlackRequest)(req, SLACK_SIGNING_SECRET);
        const { type } = req.body;
        if (type === 'url_verification') {
            yield (0, _lib_1.respondToChallenge)(req, res);
        }
        else if (req.body.event.type === 'app_mention') {
        }
    });
}
exports.default = events;

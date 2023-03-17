declare namespace NodeJS {
    export interface ProcessEnv {
        SLACK_CLIENT_ID: string;
        SLACK_CLIENT_SECRET: string;
        SLACK_SIGNING_SECRET: string;
        SLACK_BOT_TOKEN: string;
    }
}
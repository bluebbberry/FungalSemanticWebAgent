import 'dotenv/config';

if (!process.env.URL || !process.env.MASTODON_API_KEY || !process.env.ACCOUNT_NAME || !process.env.MYCELIAL_HASHTAG) {
    console.error('Missing program arguments (pass through .env file: URL, MASTODON_API_KEY, ACCOUNT_NAME, MYCELIAL_HASHTAG)!');
    process.exit(1);
}

const URL = process.env.URL;
const MASTODON_API_KEY = process.env.MASTODON_API_KEY;
const ACCOUNT_NAME = process.env.ACCOUNT_NAME;
const MYCELIAL_HASHTAG = process.env.MYCELIAL_HASHTAG;

const MYCELIAL_FETCH_SCHEDULE = process.env.MYCELIAL_FETCH_SCHEDULE;
const USER_ANSWERING_SCHEDULE = process.env.USER_ANSWERING_SCHEDULE;
const LIFECYCLE_TRIGGER_SCHEDULE = process.env.LIFECYCLE_TRIGGER_SCHEDULE;
const FETCH_USER_FEEDBACK_SCHEDULE = process.env.FETCH_USER_FEEDBACK_SCHEDULE;

export {
    URL,
    ACCOUNT_NAME,
    MASTODON_API_KEY,
    MYCELIAL_HASHTAG,
    MYCELIAL_FETCH_SCHEDULE,
    USER_ANSWERING_SCHEDULE,
    LIFECYCLE_TRIGGER_SCHEDULE,
    FETCH_USER_FEEDBACK_SCHEDULE
};

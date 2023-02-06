import { createLogger } from 'redux-logger';

export default function loggerMiddleware() {
    return createLogger();
}
import { OpenAPIHono } from '@hono/zod-openapi';
import { notFound, onError } from 'stoker/middlewares';
import { logger } from './middlewares/pino-logger.js';
import type { PinoLogger } from 'hono-pino';

interface AppBindings {
	Variables: {
		logger: PinoLogger;
	};
}

const app = new OpenAPIHono<AppBindings>();

app.use(logger());

app.get('/', (c) => {
	return c.text('Hello Hono!');
});

app.get('/error', (c) => {
	throw new Error('Oh no ...');
});

app.notFound(notFound);
app.onError(onError);

export default app;

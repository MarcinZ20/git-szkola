import { config } from 'dotenv';
import { expand } from 'dotenv-expand';
import { z } from 'zod';

expand(config());

const EnvSchema = z.object({
	NODE_ENV: z.string().default('development'),
	PORT: z.coerce.number().default(3000),
	LOG_LEVEL: z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace']),
});

const env = EnvSchema.parse(process.env);

export default env;

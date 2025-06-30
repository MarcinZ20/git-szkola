import * as z from "zod/v4";
import { UserProfileSchema } from "../schemas/profile";
import { UserSchema } from "../schemas/user";

// ============ LOGIN ============
export const LoginRequestSchema = UserSchema.pick({
	email: true,
	password: true,
});

export const LoginResponseSchema = z.object({
	token: z.string(),
	refresh: z.string().optional(),
	user: UserSchema,
});

// ============ REGISTER ============

// TODO: Add option to register as student & teacher
export const RegisterRequestSchema = z
	.object({
		firstName: z.string().max(50),
		lastName: z.string().max(50),
		nickname: z.string().max(50),
		email: z.string().email(),
		password: z.string().min(8).max(64),
		repeatPassword: z.string().min(8).max(64),
	})
	.refine((data) => data.password === data.repeatPassword, {
		message: "Passwords have to match!",
		field: ["repeatPassword"],
	});

export const RegisterResponseSchema = z.pick({
	firstName: true,
	lastName: true,
	email: true,
});

// ============ JWT ============
export const RefreshTokenSchema = z.object({
	refresh: z.string(),
});

export const JwtPayloadSchema = z.object({
	sub: z.number().int(),
	role: RoleEnum,
	iat: z.number(),
	exp: z.number(),
});

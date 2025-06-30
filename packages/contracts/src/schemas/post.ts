import * as z from "zod/v4";

export const PostSchema = z.object({
	id: z.number().int().nonnegative().optional(),
	teacherId: z.number().int().nonnegative(),
	title: z.string().max(100),
	subtitle: z.string().max(200).optional(),
	body: z.string().optional(),
	createdAt: z.coerce.date().optional(),
	updatedAt: z.coerce.date().optional(),
});

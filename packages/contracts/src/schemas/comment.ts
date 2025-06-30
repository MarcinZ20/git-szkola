import * as z from "zod/v4";

export const CommentSchema = z.object({
	id: z.number().int().nonnegative().optional(),
	postId: z.number().int().nonnegative(),
	authorId: z.number().int().nonnegative(),
	body: z.string(),
	createdAt: z.coerce.date().optional(),
});

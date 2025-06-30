import * as z from "zod/v4";
import { CommentSchema } from "../schemas/comment";
import { PostSchema } from "../schemas/post";

export const CreatePostSchema = PostSchema.ommit({
	id: true,
	createdAt: true,
	updatedAt: true,
});

export const UpdatePostSchema = PostSchema.pick({
	title: true,
	subtitle: true,
	body: true,
});

export const DeletePostSchema = PostSchema.pick({
	id: true,
	teacherId: true,
});

export const CreateCommentSchema = CommentSchema.ommit({
	id: true,
	createdAt: true,
});

export const UpdateCommentSchema = CommentSchema.pick({
	body: true,
});

export const DeleteCommentSchema = CommentSchema.pick({
	id: true,
	authorId: true,
});

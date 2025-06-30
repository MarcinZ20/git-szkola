import * as z from "zod/v4";
import { LessonSchema } from "../schemas/lesson";

export const CreateLessonSchema = LessonSchema.ommit({
	id: true,
	createdAt: true,
	updatedAt: true,
});

export const UpdateLessonSchema = LessonSchema.ommit({
	id: true,
	createdAt: true,
	updatedAt: true,
});

export const PatchLessonStatus = LessonSchema.pick({
	status: true,
});

export const PatchLessonTime = LessonSchema.pick({
	startTime: true,
	endTime: true,
});

export const PatchLessonLocation = LessonSchema.pick({
	location: true,
});

export const PatchLessonNotes = LessonSchema.pick({
	notes: true,
});

export const LessonResponseSchema = LessonSchema.ommit({
	id: true,
	updatedAt: true,
	createdAt: true,
});

import { z } from "zod";
import {
	LessonStatusEnum,
	SpecialityEnum,
} from "@/packages/contracts/src/enums/enums";

export const LessonSchema = z
	.object({
		id: z.number().int().nonnegative().optional(),
		teacherId: z.number().int().nonnegative(),
		studentId: z.number().int().nonnegative(),
		type: SpecialityEnum().default("acoustic_guitar"),
		status: LessonStatusEnum().default("scheduled"),
		startTime: z.coerce.date(),
		endTime: z.coerce.date(),
		location: z.string().optional(),
		notes: z.string().optional(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
	})
	.refine((data) => data.startTime < data.endTime, {
		message: "Lesson start must be before it's end",
		path: ["endTime"],
	});

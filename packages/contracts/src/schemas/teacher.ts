import * as z from "zod/v4";
import { SpecialityEnum } from "@/packages/contracts/src/enums/enums";

export const TeacherSchema = z.object({
	teacher_id: z.number().int().nonnegative(),
	speciality: SpecialityEnum().default("acoustic_guitar"),
	createdAt: z.coerce.date().optional(),
	updatedAt: z.coerce.date().optional(),
});

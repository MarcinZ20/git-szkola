import * as z from "zod/v4";

export const AdminLevelEnum = z.enum(["partial", "full"]);

export const RoleEnum = z.enum(["student", "teacher", "admin"]);

export const SpecialityEnum = z.enum([
	"electric_guitar",
	"acoustic_guitar",
	"vocal",
]);

export const LessonStatusEnum = z.enum([
	"scheduled",
	"confirmed",
	"rescheduled",
	"canceled",
]);

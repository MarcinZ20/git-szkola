import * as z from "zod/v4";
import { PhoneNumberValidator } from "@/utils/validators";

export const StudentSchema = z.object({
	studentId: z.number().int().nonnegative(),
	parentContact: PhoneNumberValidator(),
	createdAt: z.coerce.date().optional(),
	updatedAt: z.coerce.date().optional(),
});

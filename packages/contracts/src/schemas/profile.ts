import * as z from "zod/v4";
import { PhoneNumberValidator } from "../../../utils/validators";

export const UserProfileSchema = z.object({
	userId: z.number().int().nonnegative(),
	firstName: z.string().max(50),
	lastName: z.string().max(50),
	nickname: z.string().max(50),
	dateOfBirth: z.coerce.date(),
	phoneNumber: PhoneNumberValidator(),
	bio: z.string().optional(),
	profilePictureUrl: z.string().url().optional(),
	createdAt: z.coerce.date().optional(),
	updatedAt: z.coerce.date().optional(),
});

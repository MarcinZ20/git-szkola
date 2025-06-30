import * as z from "zod/v4";
import { UserProfileSchema } from "../schemas/profile";

export const UpdateUserProfile = UserProfileSchema.partial();

export const UserProfileLongResponse = UserProfileSchema.ommit({
	userId: true,
	updatedAt: true,
});

export const UserNamesResponse = UserProfileSchema.pick({
	firstName: true,
	lastName: true,
	nickname: true,
});

export const UserDetailsResponse = UserProfileSchema.ommit({
	userId: true,
	bio: true,
	profilePicture: true,
	createdAt: true,
	updatedAt: true,
});

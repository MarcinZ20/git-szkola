import * as z from "zod/v4";
import { RoleEnum } from "@/packages/contracts/src/enums/enums";

export const UserSchema = z.object({
	id: z.number().int().nonnegative().optional(),
	email: z.string().email().max(50),
	role: RoleEnum.default("student"),
	createdAt: z.coerce.date().optional(),
	updatedAt: z.coerce.date().optional(),
});

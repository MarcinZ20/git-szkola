import * as z from "zod/v4";
import { AdminlevelEnum } from "@/packages/contracts/src/enums/adminLevel";

export const AdminSchema = z.object({
	adminId: z.number().int().nonnegative(),
	level: z.AdminLevelEnum().default("full"),
	createdAt: z.coerce.date().optional(),
	updatedAt: z.coerce.date().optional(),
});
